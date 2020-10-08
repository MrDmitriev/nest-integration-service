import { IDeliveryAddress } from "./deliveryAddress.interface";

export interface IShipping {
	readonly "CarrierID": number,
	readonly "DeliveryAddress": IDeliveryAddress
};
