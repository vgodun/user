import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import * as process from "node:process";
import {User} from "./users/users.model";

@Module({
    controllers: [],
    providers: [],
    imports: [
       ConfigModule.forRoot({
          envFilePath: `.env`
       }),
        SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRESS_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        models: [User],
            autoLoadModels: true,
    }),
        UsersModule,
    ]
})
export class AppModule{}