import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS, //setting transporter
      options: {
        url: 'redis://localhost:6379',
      },
    },
  );
  // console.log(app.get('transport'));
  await app.listen();
}
bootstrap();
