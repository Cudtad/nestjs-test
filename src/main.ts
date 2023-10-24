import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions = {
    origin: ['http://localhost:3000', 'https://e-commerce-sand-xi.vercel.app'],
    credentials: true, //access-control-allow-credentials:true
  };
  app.use(cors(corsOptions));
  await app.listen(process.env.PORT, '0.0.0.0');
}
bootstrap();
