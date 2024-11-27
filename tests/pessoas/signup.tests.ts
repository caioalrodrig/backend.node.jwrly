import { STATUS_CODES } from "http";
import { testserver } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe('sign up', () => {
    
  it('should sign up', async () => {
    
    const response = await testserver
      .post('/signup')
      .send({
        name: "joao",
        email: "joao@gmail.com.br",
        password: "12345687777"
      });      
      expect(response.status).toBe(StatusCodes.CREATED);
      
  });

  it('should not sign up - short password', async () => {
    
    const response = await testserver
      .post('/signup')
      .send({
        name: "joao",
        email: "joao@joao",
        password: "123"
      });

      expect(response.status).toBe(StatusCodes.BAD_REQUEST);
      
  });


});
