import { Request, Response } from 'express';
import GrowdevBank from '../classes/Bank';

export default function readUserTransactions(req: Request, res: Response) {
    const { userId } = req.params;
    const user = GrowdevBank.findUserById(userId);

    if (!user) {
        return res.status(404).send({ message: 'not found' });
    }

    if (!user.transactions) {
        return res.status(404).send({ message: 'not transactions ' });
    }

    const incomeValue = user.transactions
        .map((incon) => (incon.type === 'income' ? incon.value : 0))
        .reduce((acc, next) => acc + next);
    const outcomeValue = user.transactions
        .map((outcon) => (outcon.type === 'outcome' ? outcon.value : 0))
        .reduce((acc, next) => acc + next);

    const result = incomeValue - outcomeValue;

    return res
        .status(200)
        .send({
            nameClient: user.name,
            transaction: user.transactions,
            balance: { income: incomeValue, outcome: outcomeValue, total: result },
        });
}
