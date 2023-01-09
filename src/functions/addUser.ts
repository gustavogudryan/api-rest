import { Request, Response } from 'express';
import GrowdevBank from '../classes/Bank';
import IUsers from '../interfaces/IUsers';
import User from '../classes/Users';



export default function addUser(req: Request, res: Response) {
    const { name, cpf, email, age } = req.body;

    if (!name || !cpf || !email || !age) {
        return res.status(418).send({ message: 'Infomre o nome, cpf, email e idade!' });
    }

    const user: IUsers = new User(name, cpf, email, age);

    GrowdevBank.addUserArray(user);

    return res
        .status(200)
        .send({ message: 'Success!', user, GrowdevBankUsers: GrowdevBank.users });
}
