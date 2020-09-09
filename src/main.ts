import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // TODO: fix this when you know what dmoain the client will be on.
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
