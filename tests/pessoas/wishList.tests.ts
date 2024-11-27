import { testserver } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe('new user likes watches and unlike watches', () => {

  let token: string  = "";
  let userId: number = 0;
  let WATCH_ID = 1;
    
  beforeAll(async () => {

    await testserver
    .post('/signup')
    .send({
      name:"joao",
      email: "joao@gmail.com",
      password: "12345687777"
    });

    const signinRes = await testserver
    .post('/signin')
    .send({
      email: "joao@gmail.com",
      password: "12345687777"
    });

    token = signinRes.body.bearer;
    userId = signinRes.body.userId;

    const registeredItem = await testserver
    .post('/relogios')
    .set('bearer', token)
    .send({
        brand: "Cartier",
        model: "Tank Solo",
        price: 2800
    });

    expect(registeredItem.status).toBe(StatusCodes.CREATED);

  });

  it('user likes a new watch', async () => {

    const likeRes = await testserver
      .post('/pessoas')
      .set('bearer', token)
      .query({ watchId: WATCH_ID, userId:userId });

    expect(likeRes.status).toBe(StatusCodes.CREATED);

  });

  it('makes a successful (likes) get request', async () => {

    const getRes = await testserver
      .get('/pessoas')
      .set('bearer', token)
      .query({ userId:userId, page: 1, limit: 10 });

    expect(getRes.status).toBe(StatusCodes.OK);
    expect(getRes.body).toBeInstanceOf(Object || Array);

  });

  it('user unllikes a liked watch', async () => {

    const likeRes = await testserver
      .delete('/pessoas')
      .set('bearer', token)
      .query({ watchId: WATCH_ID, userId:userId });

    expect(likeRes.status).toBe(StatusCodes.OK);

  });

});
