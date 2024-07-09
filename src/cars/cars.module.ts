import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { Car } from './entity/car.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'src/common/pipes/zodValidation.pipe';
import { createCarSchema } from './dto/createCarZod.dto';
import { FileUploadMiddleware } from 'src/common/middleware/file-upload.middleware';


@Module({
  providers: [CarsService,
    // {
    //   provide: APP_PIPE,
    //   useValue: new ZodValidationPipe(createCarSchema),
    // }
  ],
  controllers: [CarsController],
  imports: [TypeOrmModule.forFeature([Car]), UserModule],
})

export class CarsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FileUploadMiddleware)
      .forRoutes({ path: 'cars', method: RequestMethod.POST },{ path: 'cars/:id', method: RequestMethod.PATCH });
  }}
