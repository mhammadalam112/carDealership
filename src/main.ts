import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { GlobalExceptionFilter } from './common/exception-filters/globalException.filter';
import { ZodValidationPipe } from './common/pipes/zodValidation.pipe';
import { createCarSchema } from './cars/dto/createCarZod.dto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true , transform: true }));
  //app.useGlobalPipes(new ZodValidationPipe(createCarSchema));
  app.useGlobalFilters(new GlobalExceptionFilter());
  await app.listen(8000);
}
bootstrap();
