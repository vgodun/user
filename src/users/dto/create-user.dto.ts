import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: 'test@gmail.com', description: 'User email'})
    readonly email: string;

    @ApiProperty({example: 'wed46QG54b^&', description: 'User password'})
    readonly password: string;
}