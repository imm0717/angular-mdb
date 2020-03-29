import { BaseModel } from './base.model';
import { AuthCredential } from './credential.model';

export class User extends BaseModel {
  username: string
  email: string
  password: string
  rememberMe: boolean
  accessToken: string
  credential: AuthCredential

  constructor( user: object | null = {
    username: '',
    email: '',
    password: '',
    rememberMe: false,
    credential: null
  }){
    super(user)
  }

  
}
