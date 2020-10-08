import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';

const environment = process.env.NODE_ENV || 'development';

@Module({
  imports: [
		OrdersModule,
		AuthModule,
		ConfigModule.forRoot({
			envFilePath: `.env.${environment}`,
			isGlobal: true
		}),
		MongooseModule.forRoot(process.env.mongoUri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		})
	],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
