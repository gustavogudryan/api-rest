import { Request, Response } from 'express';
import GrowdevBank from '../classes/Bank';

export default function editUser(req: Request, res: Response) {
    const { name, cpf, email, age } = req.body;
    const { id } = req.params;

    if (!name || !cpf || !email || !age) {
        return res.status(418).send({ message: 'Informe os dados' });
    }
    const user = GrowdevBank.modifiedUserBy(id, name, cpf, email, Number(age));

    return res.status(user.status).send({ message: user.message, data: user.JSON });
}
