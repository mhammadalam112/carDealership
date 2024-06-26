import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}

    async getUser() :  Promise<User[]> {
        return await this.usersRepository.find();
    }

    async createUser(body: createUserDto) :  Promise<User> {
        body.password = await bcrypt.hash(body.password, 10);
        return await this.usersRepository.save(body);
    }



    async getUserByUsername(username: string) : Promise<User>{
        console.log("inside getUserByUsername username: ",username);
        
        //return await this.usersRepository.findOne({ where: {username : username} });

        return await this.usersRepository.findOneBy({ username : username })
    }


}
