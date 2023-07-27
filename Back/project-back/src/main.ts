import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);

  app.enableCors({
    origin: ['http://localhost:5173/'],
    methods: ['GET', 'POST'],
    credentials: true,
  });
}
bootstrap();
