import { NestFactory } from "@nestjs/core";
import { AppMoudule } from "./app.module";


async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppMoudule)

    await app.listen(PORT,()=>console.log("Server Started on = " + PORT))
}

start()