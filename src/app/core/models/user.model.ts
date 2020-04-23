import { Credential } from './credential.model';

export interface User {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    password: string
}
