import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrdersSchema } from './schemas/orders.schema';

@Module({
	imports: [MongooseModule.forFeature([{name: 'Orders', schema: OrdersSchema}])],
  providers: [OrdersService],
  controllers: [OrdersController]
})
export class OrdersModule {}
