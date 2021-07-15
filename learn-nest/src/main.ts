import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(1500, () => {
    console.log('Started Listening on 1500');
  });
}
bootstrap();
