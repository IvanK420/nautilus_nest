import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        super();
    }
    validate(username: string, password: string){
        const user = this.authService.validateUser({username, password});
        if(!user) throw new HttpException('informations de connection invalides', HttpStatus.UNAUTHORIZED );
        return user;
    }
}