import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import morgan from 'morgan';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Global prefix
    app.setGlobalPrefix('api');

    // Security middleware
    app.use(helmet({
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

    // CORS
    app.enableCors({
        origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    });

    // Compression
    app.use(compression());

    // Cookie parser
    app.use(cookieParser(process.env.COOKIE_SECRET));

    // Prevent NoSQL injection
    app.use(mongoSanitize());

    // Request logging
    if (process.env.NODE_ENV !== 'production') {
        app.use(morgan('dev'));
    } else {
        app.use(morgan('combined'));
    }

    // Global validation pipe
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
            transformOptions: {
                enableImplicitConversion: true,
            },
        }),
    );

    // Swagger API Documentation
    const config = new DocumentBuilder()
        .setTitle('Lutfi-Lab.ID API')
        .setDescription('API Documentation for Lutfi-Lab.ID Platform')
        .setVersion('1.0')
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                name: 'JWT',
                description: 'Enter JWT token',
                in: 'header',
            },
            'JWT-auth',
        )
        .addTag('auth', 'Authentication endpoints')
        .addTag('users', 'User management endpoints')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document, {
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
