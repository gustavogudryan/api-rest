import { v4 as uuidv4 } from 'uuid';
import IUsers from '../interfaces/IUsers';
import ITransaction from '../interfaces/ITransactions';


class User implements IUsers {
    uid: string;
    transactions: Array<ITransaction>;

    constructor(public name: string, public cpf: string, public email: string, public age: number) {
        this.uid = uuidv4()
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.age = age;
        this.transactions = [];
    }
}

export default User;
