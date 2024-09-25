import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SequelizeModule } from "@nestjs/sequelize";


@Module({
    controllers:[AppController],
    providers:[AppService],
})

export class AppMoudule {}