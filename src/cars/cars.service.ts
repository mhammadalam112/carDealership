import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entity/car.entity';
import { updateCarDto } from './dto/updateCar.dto';
import { searchCarDto } from './dto/searchCar.dto';
import { createCarDto } from './dto/createCar.dto';

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
        const rows = await this.carsRepository.find();

        if(rows.length < 1){
            throw new HttpException("No cars to show",HttpStatus.NOT_FOUND);
        }
        return rows;

    }


    async update(id: number, car: updateCarDto): Promise<any> {
        const rows = await this.carsRepository.update(id, car);

        if(rows.affected == 0){
            throw new HttpException("No car exists with the given id",HttpStatus.NOT_FOUND);
        }

        return rows;
    }

    async delete(id: number): Promise<any> {
        const rows =  await this.carsRepository.delete(id);

        if(rows.affected == 0){
            throw new HttpException("No car exists with the given id",HttpStatus.NOT_FOUND);
        }

        return rows;
    }

    async searchCars(query : searchCarDto) : Promise<Car[]> {
        const rows = await this.carsRepository.find({
            where: {
              make: query.make ? query.make : undefined,
              model: query.model ? query.model : undefined,
              year: query.year ? query.year : undefined,
              location: query.location ? query.location : undefined,
            },
          });

          if(rows.length < 1){
            throw new HttpException("No cars exist with the given criteria",HttpStatus.NOT_FOUND);
        }
        return rows;
    } 

}
