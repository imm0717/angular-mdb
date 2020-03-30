import { BaseModel } from './base.model';

export class AuthCredential extends BaseModel{
    id: number
    token: string

    constructor(credential : object | null = {
        id: null,
        token: ''
    }){
        super(credential);
    }
}