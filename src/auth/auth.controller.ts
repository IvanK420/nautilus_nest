import { Body, Controller, Get, HttpException, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthPayloadDto } from './dtos/auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService) {}

    @Post('login')
    @UseGuards(LocalGuard)
    login(@Req() req : Request){
       return req.user;
    }

    @Get('status')
    @UseGuards(JwtAuthGuard)
    status(@Req()req : Request){
    console.log('inside Authcontroller status method');
    return req.user
    }
}
