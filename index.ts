import { server } from './src/Server';
import 'dotenv/config';

const port = process.env.PORT || 3030;


server.listen(port, () => {

    console.log(`Servidor iniciado em http://localhost:${port}`);
});