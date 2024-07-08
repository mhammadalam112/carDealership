import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './user/entity/user.entity';
import { AuthModule } from './auth/auth.module';
import { CarsModule } from './cars/cars.module';
import { Car } from './cars/entity/car.entity';
import { dataSourceOptions } from 'database/data-source';

@Module({
  imports: [UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    AuthModule,
    CarsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
