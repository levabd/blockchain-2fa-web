class Client {
    PhoneNumber: string;
    Uin: number;
    Name: string;
    IsVerified: boolean;
    Email: string;
    Sex: string;
    Birthdate: number;
    PushToken?: string;
    AdditionalData?: {
        PersonalAccount: number,
        Region: string;
    };
    Logs?: any;
    Address?: string;

    constructor(
    ) {
        this.PhoneNumber = '';
        this.Uin = null;
        this.Name = '';
        this.IsVerified = false;
        this.Email = '';
        this.Sex = '';
        this.Birthdate = null;
        this.PushToken = '';
        this.AdditionalData.PersonalAccount = null;
        this.AdditionalData.Region = '';
        this.Logs = [];
        this.Address = '';
    }
}

export default Client;
