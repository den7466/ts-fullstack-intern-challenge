import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  const config = app.get(ConfigService);
  const configSwagger = new DocumentBuilder()
    .setTitle(`${config.get('SERVICE_NAME')}`)
    .setDescription('API Documentation')
    .addServer(`http://${config.get('HTTP_HOST')}:${config.get('HTTP_PORT')}}`)
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup(`/docs`, app, document);
  await app.listen(config.get('HTTP_PORT'));
}
bootstrap();
