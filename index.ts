import { server } from './src/Server';
import 'dotenv/config';
import { Knex } from './src/database/knex';
import pg from 'pg';

const port = process.env.PORT || 3030;

if ( process.env.NODE_ENV === 'production' ){
    pg.types.setTypeParser(20, 'text', parseInt);
}

const startServer = () => {
    server.listen(process.env.PORT || 3030, () => {
        console.log(`Servidor iniciado em http://localhost:${port}`);
    });
};

// if( !process.env.IS_LOCALHOST ){
Knex.migrate.latest()
.then(() => {
    Knex.seed.run()
    .then(() => startServer())
    .catch(console.log);
})
.catch(console.log);
// } else {
//   startServer();
// }