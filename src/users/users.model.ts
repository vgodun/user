import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";

interface UserCreationAttrs {
email: string;
password: string;
}

@Table({tableName:'users'})
export class User extends Model<User,UserCreationAttrs>{

    @ApiProperty({example: 1, description: 'Unique identifier'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'test@gmail.com', description: 'User email'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '123Qas!@$', description: 'password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'Ban status'})
    @Column({type: DataType.BOOLEAN,defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'Spam', description: 'Ban reason'})
    @Column({type: DataType.STRING,allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}