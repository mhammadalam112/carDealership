import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entity/car.entity';
import { createCarDto } from './dto/createCar.dto';
import { updateCarDto } from './dto/updateCar.dto';
import { searchCarDto } from './dto/searchCar.dto';

@Injectable()
export class CarsService {
    constructor(
        @InjectRepository(Car)
        private carsRepository: Repository<Car>,
    ) { }

    async create(car: createCarDto): Promise<Car> {
        return await this.carsRepository.save(car);
    }

    async findAll(): Promise<Car[]> {
        return await this.carsRepository.find();
    }


    async update(id: number, car: updateCarDto): Promise<any> {
        return await this.carsRepository.update(id, car);
    }

    async delete(id: number): Promise<any> {
        return await this.carsRepository.delete(id);
    }

    async searchCars(query : searchCarDto) : Promise<Car[]> {
        return this.carsRepository.find({
            where: {
              make: query.make ? query.make : undefined,
              model: query.model ? query.model : undefined,
              year: query.year ? query.year : undefined,
              location: query.location ? query.location : undefined,
            },
          });
    } 

}
