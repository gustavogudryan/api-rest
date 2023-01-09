import express from 'express';
import cors from 'cors';
import router from './routes/routes';
import checkRequest from './middlewares/checkRequest';

const server = express ()

const port = process.env.PORT || 3031

server.use(express.json(), cors(), checkRequest, router)


server.listen(port, () => console.log("Server Working!"));
