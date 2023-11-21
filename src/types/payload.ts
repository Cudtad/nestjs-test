export interface Payload {
  id: string;
  username: string;
  seller: boolean;
  iat?: number;
  expiresIn?: string;
}
