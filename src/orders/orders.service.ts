import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IOrders } from './interfaces/orders.interface';

@Injectable()
export class OrdersService {
	constructor(@InjectModel('Orders') private readonly ordersModel: Model<IOrders>){
	}
}
