import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'src/common/pipes/zodValidation.pipe';
import { createUserSchema } from './dto/createUserZod.dto';

@Module({
    controllers: [UserController],
    providers: [UserService, 
        // {
        //     provide: APP_PIPE,
        //     useValue: new ZodValidationPipe(createUserSchema),
        // }
    ],
    imports: [TypeOrmModule.forFeature([User])],
    exports: [UserService],
})
export class UserModule {}
