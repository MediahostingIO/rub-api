export interface AccountResponse {
    user: Account
}

export interface Account {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    company: string;
    street: string;
    house_number: string;
    zip: string;
    city: string;
    region: string;
}
