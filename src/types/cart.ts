export interface SelectedAddon {
  id: string;
  name: string;
  price: number;
}

export interface CartItem {
  packageId: string;
  slug: string;
  title: string;
  price: number;
  imageTheme: "pink" | "gold" | "rose" | "plum" | "amber" | "emerald";
  visualIcon: string;
  selectedAddons: SelectedAddon[];
  customMessage?: string;
  recipientName?: string;
  deliveryDate?: string;
  deliveryTimeSlot?: string;
  quantity: number;
  totalPrice: number;
}
