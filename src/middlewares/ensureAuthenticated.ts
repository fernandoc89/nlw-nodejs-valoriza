import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
  // Receber o token
  const authToken = request.headers.authorization;
  
  // Validar se o token está preenchido
  if(!authToken){
    return response.status(401).end()
  }

  // retirando o espaço entre o Bearer e o token, colocando o valor em token
  const [,token] = authToken.split(" "); 

  // Verificar se o token é válido
  try {
    const { sub } = verify(token, "cf56d11153b3f6e8e4485b002bd33cd1secret") as IPayload;  
    
  // Recuperar informações do user
    request.user_id = sub;
    
    return next();
  } catch (err) {
    return response.status(401).end();
  }

}