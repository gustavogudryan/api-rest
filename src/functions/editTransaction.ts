import { Request, Response } from 'express';
import GrowdevBank from '../classes/Bank';

export default function editTransaction(req: Request, res: Response) {
    const { userid, id } = req.params;
    const user = GrowdevBank.findUserById(userid);
    const { title, value, type } = req.body;

    if (!title || !value || !type) {
        return res.status(418).send({
            message:
                'Informe os dados.',
        });
    }

    if (!user) {
        return res.status(404).send({ message: 'Not found!' });
    }

    const transaction = user.transactions.find((trans) => trans.uid === id);

    if (!transaction) {
        return res.status(404).send({ message: 'Essa transação não existe' });
    }

    transaction.title = title;
    transaction.value = value;
    transaction.type = type;

    return res.status(200).send({
        message: 'success',
        user: user.name,
        transaction,
    });
}
