import { Response } from 'express';
import GrowdevBank from '../classes/Bank';

export default function readUserList(res: Response) {
    const userlist = GrowdevBank.users.map((user) => {
        return {
            id: user.uid,
            name: user.name,
            cpf: user.cpf,
            email: user.email,
            age: user.age,
        };
    });
    res.status(200).json(userlist);
}
