import { Request, Response, NextFunction } from 'express';
import GrowdevBank from '../classes/Bank';

const checkCpf = (req: Request, res: Response, next: NextFunction) => {
    const { cpf } = req.body;
    const cpfExist = GrowdevBank.checkCpf(cpf)
    if (cpfExist) {
        return res
            .status(403)
            .send({ error: 403, message: 'Este CPF já possui cadastro!' });
    }

    next();
};

export default checkCpf;
