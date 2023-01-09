import { Request, Response } from 'express';
import GrowdevBank from '../classes/Bank';

export default function thisUser(req: Request, res: Response) {
    const { id } = req.params;
    const user = GrowdevBank.findUserById(id);

    if (!user) {
        return res.status(404).send({ message: `O usuário de Id: ${id} não foi encontrado` });
    }
    return res
        .status(200)
        .send({
            id: user.uid,
            name: user.name,
            cpf: user.cpf,
            email: user.email,
            age: user.age,
        });
}
