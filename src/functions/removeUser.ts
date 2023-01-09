import { Request, Response } from 'express';
import GrowdevBank from '../classes/Bank';

export default function removeUser(req: Request, res: Response) {
    const { id } = req.params;
    
    const index = GrowdevBank.users.findIndex((user) => user.uid === id);
    if (index < 0) {
        res.status(404).send({ message: 'Not Found' });
    }

    GrowdevBank.users.splice(index, 1);

    return res.send({ message: 'Usuário deletado!' });
}
