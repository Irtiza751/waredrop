import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /**
   * Setting the global prefix api/endpoint
   */
  app.setGlobalPrefix('api');

  await app.listen(4000);
}

bootstrap();
