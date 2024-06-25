import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    constructor( private authService: AuthService){}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    login(@Request() req){
        return this.authService.login(req.user);
    }
}
