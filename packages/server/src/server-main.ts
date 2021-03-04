import { createHttpServer } from './http-server';

const PORT = 3000;

const app = createHttpServer();

app.listen(PORT, () => {
    console.log(`Listening on: ${PORT}`);
});
