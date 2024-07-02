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
      .get('/pessoas')
      .set('bearer', token)
      .set('uid', userId)
      .query({ id: WATCH_ID });

    expect(likeRes.status).toBe(StatusCodes.OK);

  });

  it('makes a successful (likes) get request', async () => {

    const getRes = await testserver
      .get('/pessoas')
      .set('bearer', token)
      .set('uid', userId);

    expect(getRes.status).toBe(StatusCodes.OK);
    expect(getRes.body).toBeInstanceOf(Object || Array);

  });

  it('user unllikes a liked watch', async () => {

    const likeRes = await testserver
      .delete('/pessoas')
      .set('bearer', token)
      .set('uid', userId)
      .query({ id: WATCH_ID });

    expect(likeRes.status).toBe(StatusCodes.OK);

  });

});
