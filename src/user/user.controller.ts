import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { ZodValidationPipe } from 'src/common/pipes/zodValidation.pipe';
import { createUserSchema } from './dto/createUserZod.dto';
import { createUserDto } from './dto/createUser.dto';

@Controller('user')
export class UserController {

    constructor(private userService : UserService){}

    @Get()
    getUser() {
        return this.userService.getUser();
    }

    @Post()
    @UsePipes(new ZodValidationPipe(createUserSchema))
    createUser(@Body() body: createUserDto){
        return this.userService.createUser(body);
    }

    @Get(':username')
    getUserByUsername(@Param('username') username: string){
        return this.userService.getUserByUsername(username);
    }


}
