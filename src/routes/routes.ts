import { Router, Request, Response } from 'express';
import addTransaction from '../functions/addTransaction';
import addUser from '../functions/addUser';
import customerTransaction from '../functions/customerTransaction';
import editTransaction from '../functions/customerTransaction';
import editUser from '../functions/editUser';
import readUserList from '../functions/readUserList';
import readUserTransactions from '../functions/readUserTransactions';
import removeTransactions from '../functions/removeTransactions';
import removeUser from '../functions/removeUser';
import thisUser from '../functions/thisUser';
import checkCpf from '../middlewares/checkCpf';


const router = Router()

router.post('/users', checkCpf, (req: Request, res: Response) =>{
    addUser(req, res)
})

router.get('/users', (req: Request, res: Response) => {
    readUserList(res);
});

router.get('/users/:id', (req: Request, res: Response) => {
    thisUser(req, res)
});

router.put('/users/:id', (req: Request, res: Response) => {
    editUser(req, res);
});

router.delete('/users/:id', (req: Request, res: Response) => {
    removeUser(req, res);
});

// transactions >>

router.post('/users/:userId/transactions', (req: Request, res: Response) => {
    addTransaction(req, res);
});

router.get('/users/:userId/transactions', (req: Request, res: Response) => {
    readUserTransactions(req, res);
});

router.get('/users/:userId/transactions/:id', (req: Request, res: Response) => {
    customerTransaction(req, res);
});

router.put('/users/:userId/transactions/:id', (req: Request, res: Response) => {
    editTransaction(req, res);
});

router.delete('/users/:userId/transactions/:id', (req: Request, res: Response) => {
    removeTransactions(req, res);
});

export default router