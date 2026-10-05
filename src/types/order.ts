import { CartItem } from "./cart";

export type OrderStatus =
  | "CONFIRMED"
  | "HOST_ASSIGNED"
  | "BAKING_AND_FLORALS"
  | "EN_ROUTE"
  | "DELIVERED"
  | "CANCELLED";

export interface Address {
  streetAddress: string;
  landmark?: string;
  city: string;
  state?: string;
  pincode: string;
}

export interface OrderDetails {
  orderId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  recipientName: string;
  recipientPhone: string;
  deliveryAddress: string;
  city: string;
  pincode: string;
  deliveryDate: string;
  deliveryTimeSlot: string;
  presenterNote?: string;
  specialInstructions?: string;
  items: CartItem[];
  subtotal: number;
  addonsTotal: number;
  deliveryFee: number;
  totalAmount: number;
  status?: OrderStatus;
  createdAt: string;
}
