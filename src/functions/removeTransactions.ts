import { Request, Response } from 'express';
import GrowdevBank from '../classes/Bank';

export default function removeTransactions(req: Request, res: Response) {
    const { userid, id } = req.params;
    const user = GrowdevBank.findUserById(userid);

    if (!user) {
        return res.status(404).send({ message: 'Not found!' });
    }

    const transaction = user.transactions.findIndex((trans) => trans.uid === id);

    if (transaction < 0) {
        return res.status(404).send({ message: 'Essa transação não existe!' });
    }

    user.transactions.splice(transaction, 1);
    return res.status(200).send({ message: 'Transição deletada!' });
}
