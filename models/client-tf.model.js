
class ClientTF {

    constructor(client) 
    {
      this.PhoneNumber = client.PhoneNumber;
      this.Uin = client.Uin;
      this.Name = client.Name;
      this.IsVerified = client.IsVerified;
      this.Email = client.Email;
      this.Sex = client.Sex;
      this.BirthDate = client.BirthDate;
      this.Logs = client.Logs;
      this.Address = client.Address;
      this.PushToken = client.PushToken;
      this.AdditionalData = client.AdditionalData
    }      

  }

module.exports = ClientTF;