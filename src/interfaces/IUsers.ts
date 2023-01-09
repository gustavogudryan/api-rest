import ITransaction from "./ITransactions";



export default interface IUsers {
    uid: string;
    name: string;
    email: string;
    cpf: string;
    age: number;
    transactions: Array<ITransaction>
}