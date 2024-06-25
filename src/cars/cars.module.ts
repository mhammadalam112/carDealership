import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { Car } from './entity/car.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [CarsService],
  controllers: [CarsController],
  imports: [TypeOrmModule.forFeature([Car]), UserModule],
})
export class CarsModule {}
