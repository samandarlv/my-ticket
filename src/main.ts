import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const start = async () => {
    try {
        const app = await NestFactory.create(AppModule);
        const PORT = process.env.PORT || 3030;
        app.useGlobalPipes(new ValidationPipe());

        const config = new DocumentBuilder()
            .setTitle("My-Ticket Project")
            .setDescription("REST API")
            .setVersion("1.0.0")
            .addTag("NestJS, Postgres, Sequelize")
            .build();

        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup("/api/docs", app, document);

        await app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}-port`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
