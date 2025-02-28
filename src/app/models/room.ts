export interface Room {
  id:number;
    roomNumber: string;
    category: string;
    roomFloor: string;
    capacity: number;
    isAvailable: string;
    price: number;
    description: string;
    amenities: Amenity[];
  }
  
  export interface Amenity {
    name: string;
    quantity: number;
  }