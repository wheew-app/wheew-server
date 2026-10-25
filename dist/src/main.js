"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const GlobalHttpExceptionHandler_1 = require("./common/exceptions/GlobalHttpExceptionHandler");
const mongo_id_validation_pipe_1 = require("./common/pipes/mongo-id-validation.pipe");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: true
    });
    app.useStaticAssets('uploads', {
        prefix: '/uploads',
    });
    app.useGlobalPipes(new mongo_id_validation_pipe_1.MongoIdValidationPipe(), new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.useGlobalFilters(new GlobalHttpExceptionHandler_1.GlobalHttpExceptionHandler());
    app.enableShutdownHooks();
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map