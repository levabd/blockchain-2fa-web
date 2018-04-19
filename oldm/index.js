const {createContext, CryptoFactory} = require('sawtooth-sdk/signing')

const context = createContext('secp256k1')
const privateKey = context.newRandomPrivateKey()
const signer = new CryptoFactory(context).newSigner(privateKey)
const crypto = require('crypto')

const _hash = (x) => crypto.createHash('sha512').update(x).digest('hex').toLowerCase()
const cbor = require('cbor')
const FAMILY_NAME = 'tfa';
const FAMILY_NAMESPACE = _hash(FAMILY_NAME).substring(0, 6)
const FAMILY_VERSION = '0.1';


const handle = function (i){
    var _PhoneNumber = getRandomInt(111111111, 999999999);
    var _uin = getRandomInt(9999999999, 99999999999);
    const payload = {
        Action: 'create', // create | update | delete
        PhoneNumber: '77' + _PhoneNumber,
        User: {
            PhoneNumber: '77' + _PhoneNumber,
            Uin: _uin,
            Name: 'James Bond '+i,
            IsVerified: false,
            Email: 'jb@ee.ru',
            Sex: 'male',
            Birthdate: 2012554112,
            Logs:[]
        }
    }

    // const uinPart = _hash(payload.User.Uin.toString()).slice(-32)
    const phoneNumberPart = _hash(payload.User.PhoneNumber.toString()).slice(-64)

   // let address = FAMILY_NAMESPACE + _hash(payload.User.Uin +payload.User.PhoneNumber).slice(-64)
    let address = FAMILY_NAMESPACE + phoneNumberPart
    console.log(address);
    const payloadBytes = cbor.encode(payload)

    const {createHash} = require('crypto')
    const {protobuf} = require('sawtooth-sdk')

    const transactionHeaderBytes = protobuf.TransactionHeader.encode({
        familyName: 'kaztel',
        familyVersion: '0.1',
        inputs: [address],
        outputs: [address],
        signerPublicKey: signer.getPublicKey().asHex(),
        // In this example, we're signing the batch with the same private key,
        // but the batch can be signed by another party, in which case, the
        // public key will need to be associated with that key.
        batcherPublicKey: signer.getPublicKey().asHex(),
        // In this example, there are no dependencies.  This list should include
        // an previous transaction header signatures that must be applied for
        // this transaction to successfully commit.
        // For example,
        // dependencies: ['540a6803971d1880ec73a96cb97815a95d374cbad5d865925e5aa0432fcf1931539afe10310c122c5eaae15df61236079abbf4f258889359c4d175516934484a'],
        dependencies: [],
        payloadSha512: createHash('sha512').update(payloadBytes).digest('hex')
    }).finish()


    const signature0 = signer.sign(transactionHeaderBytes)

    const transaction = protobuf.Transaction.create({
        header: transactionHeaderBytes,
        headerSignature: signature0,
        payload: payloadBytes
    })

    const transactions = [transaction]

    const batchHeaderBytes = protobuf.BatchHeader.encode({
        signerPublicKey: signer.getPublicKey().asHex(),
        transactionIds: transactions.map((txn) => txn.headerSignature),
    }).finish()

    const signature1 = signer.sign(batchHeaderBytes)

    const batch = protobuf.Batch.create({
        header: batchHeaderBytes,
        headerSignature: signature1,
        transactions: transactions
    })

    const batchListBytes = protobuf.BatchList.encode({
        batches: [batch]
    }).finish()

    const request = require('request')

    request.post({
        url: 'http://127.0.0.1:8008/batches',
        body: batchListBytes,
        headers: {'Content-Type': 'application/octet-stream'}
    }, (err, response) => {
        if (err) return console.log(err)
        console.log(response.body)
    })
}
function getRandomInt(min, max) {
    return (Math.floor(Math.random() * (max - min)) + min);
  }
for(let i=0; i<=9;i++){    
      
    
    (function(cntr) {
        // here the value of i was passed into as the argument cntr
        // and will be captured in this function closure so each
        // iteration of the loop can have it's own value
        handle(cntr)
        console.log(cntr)
    })(i);
}
