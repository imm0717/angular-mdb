import { Credential } from './credential.model';

export interface User {
    email: string,
    password: string,
    username: string,
    accessToken: string,
    credential: Credential
}
