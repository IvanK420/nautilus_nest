import { HttpException, Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUsers = [
    {   
        id: 1,
        username: 'john',
        password: 'password',
    },
    {
        id: 2,
        username: 'chris',
        password: 'secret',
    }];

@Injectable()
export class AuthService {
    constructor(private jwtService : JwtService) {}

    validateUser({username  , password}: AuthPayloadDto) {
        // logic to validate user
        // ici on va chercher l'utilisateur dans la base de données
        const finduser = fakeUsers.find((user) => user.username === username);
        console.log(finduser);
        if(!finduser) return null;
        if(password === finduser.password) {
            const {password, ...user} = finduser;
           return this.jwtService.sign(user);
        }else{
           throw  new HttpException('mots de passe incorect', 401);
        }
    }
}
