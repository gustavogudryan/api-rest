import { Router, Request, Response } from 'express';
import addUser from '../functions/addUser';
import checkCpf from '../middlewares/checkCpf';



const router = Router()

router.post('/users', checkCpf, (req: Request, res: Response) =>{
    addUser(req, res)
})














export default router