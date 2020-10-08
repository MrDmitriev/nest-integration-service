import { Document } from 'mongoose';
import { IProduct } from './product.interface';
import { IShipping } from './shipping.interface';

export interface IOrders extends Document {
	readonly "Validated": boolean,
	readonly "State": string,
	readonly "OrderID": string,
	readonly "InvoiceSendLater": string,
	readonly "Issued": string,
	readonly "OrderType": string,
	readonly "Shipping": IShipping,
	readonly "Products": IProduct[],
}