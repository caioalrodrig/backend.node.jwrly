import { testserver } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe('create', () => {
    
    const res1 =  async () =>{
        await testserver
        .post('/relogios')
        .send({
            marca: 'Ro',
            preco: 40,
        });
    }
    
})
