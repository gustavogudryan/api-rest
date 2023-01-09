import { Request, Response } from 'express';
import GrowdevBank from '../classes/Bank';

export default function customerTransaction(req: Request, res: Response) {
    const { userid, id } = req.params;
    const user = GrowdevBank.findUserById(userid);
    if (!user) {
        return res.status(404).send({ message: 'not found' });
    }

    const transaction = user.transactions.find((transaction) => transaction.uid === id);
    if (!transaction) {
        return res.status(404).send({ message: 'transaction not found' });
    }

    return res.status(200).send({ user: user.name, transaction });
}
