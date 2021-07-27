import { config } from 'dotenv';
import { createHttpServer } from './http-server';

config();

const PORT = process.env.PORT || 3000;

const app = createHttpServer();

app.listen(PORT, () => {
    console.log(`Listening on: ${PORT}`);
});
