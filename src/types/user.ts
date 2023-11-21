import { Document } from 'mongoose';

export interface User extends Document {
  username: string;
  readonly password: string;
  seller: boolean;
  address: Address;
  created: Date;
}

export interface Address {
  addr1: string;
  addr2: string;
  city: string;
  state: string;
  country: string;
  zip: number;
}

// export interface UserDetails {
//   _id: string;
//   email: string;
//   active: boolean;
//   name?: string;
//   phone?: string;
//   lastLoggedIn?: Date;
//   roles: string[];
//   createdAt: Date;
//   updatedAt: Date;
// }
