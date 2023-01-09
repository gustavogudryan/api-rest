import { Request, Response } from 'express';
import GrowdevBank from '../classes/Bank';
import Transaction from '../classes/Transaction';

export default function addTransaction(req: Request, res: Response) {
    const { userId } = req.params;
    const { title, value, type } = req.body;

    if (!title || !value || !type) {
        return res.status(418).send({ message: 'Informe os dados' });
    }
    const user = GrowdevBank.findUserById(userId)!;

    const newTransaction = new Transaction(title, value, type);

    user.transactions.push(newTransaction);

    return res.status(200).send({ message: 'success', newTransaction, user });
}
