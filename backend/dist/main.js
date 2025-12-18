"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const morgan_1 = __importDefault(require("morgan"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.use((0, helmet_1.default)({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
                fontSrc: ["'self'", "https://fonts.gstatic.com"],
                imgSrc: ["'self'", "data:", "https:"],
                scriptSrc: ["'self'"],
            },
        },
        crossOriginEmbedderPolicy: false,
    }));
    app.enableCors({
        origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    });
    app.use((0, compression_1.default)());
    app.use((0, cookie_parser_1.default)(process.env.COOKIE_SECRET));
    app.use((0, express_mongo_sanitize_1.default)());
    if (process.env.NODE_ENV !== 'production') {
        app.use((0, morgan_1.default)('dev'));
    }
    else {
        app.use((0, morgan_1.default)('combined'));
    }
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Lutfi-Lab.ID API')
        .setDescription('API Documentation for Lutfi-Lab.ID Platform')
        .setVersion('1.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
    }, 'JWT-auth')
        .addTag('auth', 'Authentication endpoints')
        .addTag('users', 'User management endpoints')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🔒 Lutfi-Lab.ID Backend Server                         ║
║                                                           ║
║   🌐 Server:     http://localhost:${port}                    ║
║   📚 Swagger:    http://localhost:${port}/api/docs           ║
║   🛡️  Security:   Helmet + CORS + Rate Limiting          ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
  `);
}
bootstrap();
//# sourceMappingURL=main.js.map