import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dtos/auth.dto';

const fakeUsers = [
    {   
        id: 1,
        username: 'john',
        password: 'changeme',
    },
    {
        id: 2,
        username: 'chris',
        password: 'secret',
    }];

@Injectable()
export class AuthService {
    validateUser({username  ,password}: AuthPayloadDto) {
        // logic to validate user
        const finduser = fakeUsers.find((user) => user?.username === username);
        if(!finduser) {
            return null;
        }
        if(finduser.password === password) {
            return finduser;
        }
    }
}
