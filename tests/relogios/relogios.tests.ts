import { testserver } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe('create account, obtain credentials to allow registering watches, at last query it', () => {

  let token: string  = "";
  let WATCH_ID = 1;
  
  beforeAll(async () => {

    await testserver
    .post('/signup')
    .send({
      name:"joao",
      email: "joao1@gmail.com",
      password: "12345687777"
    });

  });

  it('should receive a bearer token as header response', async () => {
    const signinRes = await testserver
    .post('/signin')
    .send({
      email: "joao1@gmail.com",
      password: "12345687777"
    });

    token = signinRes.body.bearer;
    expect(signinRes.status).toBe(StatusCodes.OK);

  });

  it('should create relogios', async () => {
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
  })

  it('makes a successful (watches) get request', async () => {

    const getRes = await testserver
      .get('/relogios')
      .set('bearer', token)

    expect(getRes.status).toBe(StatusCodes.OK);
    expect(getRes.body).toBeInstanceOf(Object || Array);

  });
});