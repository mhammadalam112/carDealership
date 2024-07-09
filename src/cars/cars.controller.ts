import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, Req, UploadedFile, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { CarsService } from './cars.service';
import { updateCarDto } from './dto/updateCar.dto';
import { searchCarDto } from './dto/searchCar.dto';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';
import { rolesGuard } from 'src/auth/roles.guard';
import { AuthGuard } from '@nestjs/passport';
import { createCarSchema } from './dto/createCarZod.dto';
import { createCarDto } from './dto/createCar.dto';
import { ZodValidationPipe } from 'src/common/pipes/zodValidation.pipe';
import { updateCarSchema } from './dto/updateCarZod.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) { }

    @Post()
    @UseGuards(rolesGuard)
    @Roles(Role.Dealer)
    @UsePipes(new ZodValidationPipe(createCarSchema))
    create(@Body() car: createCarDto) {
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
    @UsePipes(new ZodValidationPipe(updateCarSchema))
    update(@Body() car: updateCarDto, @Param('id') id: number, ) {
        return this.carsService.update(id, car);
    }

    @Delete(':id')
    @UseGuards(rolesGuard)
    @Roles(Role.Dealer)
    delete(@Param('id') id: number) {
        return this.carsService.delete(id);
    }


}

