import { testserver } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe('interactions, user likes watches and unlike watches', () => {

  let token: string  = "";
  let userId: string = "";
  let WATCH_ID = 1;
  
  beforeAll(async () => {
      
    const signInRes = await testserver
    .post('/signin')
    .send({
      email: "joao@gmail.com",
      password: "12345687777"
    });

    expect(signInRes.status).toBe(StatusCodes.OK);

    token = signInRes.headers.bearer;
    userId = signInRes.headers.uid;

    const registeredItem1 = await testserver
    .post('/relogios')
    .set('bearer', token)
    .send({
        brand: "Cartier",
        model: "Tank Solo",
        price: 2800
    });

    const registeredItem2 = await testserver
    .post('/relogios')
    .set('bearer', token)
    .send({
      brand: "Breitling",
      model: "Navitimer",
      price: 7900
    });

    expect(registeredItem1.status).toBe(StatusCodes.CREATED);
    expect(registeredItem2.status).toBe(StatusCodes.CREATED);

  });

  it('makes a successful (watches) get request', async () => {

    const getRes = await testserver
      .get('/relogios')
      .set('bearer', token)
      .set('uid', userId);

    expect(getRes.status).toBe(StatusCodes.OK);
    expect(getRes.body).toBeInstanceOf(Object || Array);

  });
});