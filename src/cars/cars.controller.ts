import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { CarsService } from './cars.service';
import { updateCarDto } from './dto/updateCar.dto';
import { searchCarDto } from './dto/searchCar.dto';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { rolesGuard } from 'src/auth/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { CreateCarDto } from './dto/createCarZod.dto';
import { createCarDto } from './dto/createCar.dto';
import { FileUploadInterceptor } from 'src/common/middleware/file-upload.middleware';

@UseGuards(AuthGuard('jwt'))
@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) { }

    @Post()
    @UseGuards(rolesGuard)
    @Roles(Role.Dealer)
    @UseInterceptors(FileUploadInterceptor)
    create(@Body() car: createCarDto, @UploadedFile() file?: Express.Multer.File) {
        if (file) {
            car.image = file.filename;
        }
        console.log("car",car);
        return this.carsService.create(car);
    }

    @Get()
    @UseGuards(rolesGuard)
    @Roles(Role.Buyer)
    findAll() {
        return this.carsService.findAll();
    }

    @Get('search')
    @UseGuards(rolesGuard)
    @Roles(Role.Buyer)
    searchCars(@Query() query: searchCarDto) {
        console.log(query);
        return this.carsService.searchCars(query);
    }

    @Patch(':id')
    @UseGuards(rolesGuard)
    @Roles(Role.Dealer)
    @UseInterceptors(FileUploadInterceptor)
    update(@Param('id') id: number, @Body() car: updateCarDto, @UploadedFile() file?: Express.Multer.File) {
        if (file) {
            car.image = file.filename;
        }
        return this.carsService.update(id, car);
    }

    @Delete(':id')
    @UseGuards(rolesGuard)
    @Roles(Role.Dealer)
    delete(@Param('id') id: number) {
        return this.carsService.delete(id);
    }


}

