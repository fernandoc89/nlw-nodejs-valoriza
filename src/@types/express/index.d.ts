// sobrescrevendo o tipo dentro da biblioteca Express
declare namespace Express {
  export interface Request {
    user_id: string;
  }
}