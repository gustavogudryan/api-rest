import IUsers from '../interfaces/IUsers';
import User from './Users';

class Bank {
    ag: string;
    name: string;
    manager: {
        uid: string;
        name: string;
        password: string;
    };
    users: Array<IUsers>;
    constructor() {
        this.ag = '001';
        this.name = 'GrowdevBank';
        this.manager = {
            uid: 'j928lw-plmdwb-jk3851-abjy105',
            name: 'Gudryan',
            password: '123456',
        };
        this.users = [];
    }

    addUserArray(user: User) {
        this.users.push(user);
    }

    checkCpf(cpf: string) {
        return this.users.some((user) => user.cpf === cpf);
    }

    findUserById(id: string) {
        return this.users.find((user) => user.uid === id);
    }

    modifiedUserBy(id: string, name: string, cpf: string, email: string, age: number) {
        const user = this.findUserById(id);
        if (!user) {
            return { status: 404, message: 'Not found' };
        }
        user.name = name;
        user.cpf = cpf;
        user.email = email;
        user.age = age;
        return { status: 200, message: 'OK', JSON: user };
    }
}

const GrowdevBank = new Bank();

export default GrowdevBank;
