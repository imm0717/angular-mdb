import { Credential } from './credential.model';

export interface User {
    email: string,
    username: string,
    accessToken: string,
    credential: Credential
}
