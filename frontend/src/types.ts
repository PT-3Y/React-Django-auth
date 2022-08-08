export interface AccountResponse {
    user: {
      id: string;
      firstname: string;
      lastname: string;
      email:string;
      is_allowedd: boolean;
      created: Date;
      updated: Date;
    };
    access: string;
    refresh: string;
  }