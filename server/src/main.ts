import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

const FRONT_URL = `${process.env['FRONT_URL']}`;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Setting up the OpenApi to generate client sdk
  const config = new DocumentBuilder()
      .setTitle('jobs API')
      .setDescription('Simple service for job management')
      .setVersion('1.0')
      .addTag('jobs')
      .build();

  const document = SwaggerModule.createDocument(app, config);

  // To save the api specification in root
  fs.writeFileSync('./api-spec.json', JSON.stringify(document));

  SwaggerModule.setup('api', app, document);

  app.enableCors({
    credentials: true,
    origin: [FRONT_URL],
  }); //  interact w/ vue js which is on a different port
  await app.listen(3000)
}
bootstrap();
