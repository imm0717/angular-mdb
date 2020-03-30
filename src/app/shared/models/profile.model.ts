import { BaseModel } from "./base.model";

export class Profile extends BaseModel {
  id: number;
  firstname: string;
  lastname: string;

  constructor(profile: object | null = {
      id: null,
      firstname: '',
      lastname: ''
  }) {
    super(profile);
  }
}
