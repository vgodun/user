import {ApiTags} from "@nestjs/swagger";
import {Body, Controller, Post} from "@nestjs/common";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {AuthService} from "./auth.service";

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService) {}
    @Post('/login')
    login(@Body() userDto:CreateUserDto) {

        return this.authService.login(userDto)
    }
    @Post('/registration')
    registration(@Body() userDto:CreateUserDto) {
        console.log('login', userDto)
       return this.authService.registration(userDto)
    }
}