import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
  };

  app.enableCors(corsOptions);

  await app.listen(process.env.PORT, '0.0.0.0');
}
bootstrap();
