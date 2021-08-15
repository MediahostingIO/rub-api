export interface TeamspeakInstancesResponse {
    instances: Teamspeak[]
}

export interface TeamspeakInstanceResponse {
    instance: TeamspeakInstance
}

export interface Teamspeak {
    id: number
    user_id: number
    title: string
    ip_address: string
    query_port: number
    query_username: string
}

export interface TSInstance {
    id: number;
    user_id: number;
    title: string;
    ip_address: string;
    query_port: number;
    query_username: string;
    query_password: string;
    averageClients: number;
    currentSlots: number;
}

export interface TeamspeakInstance extends TSInstance {
    pricePerSlot: number;
    currentPrice: string;
    online: boolean;
    user: User;
}

export interface User {
    id: number;
    email: string;
    created_at: string;
    updated_at: string;
    permission_group_id: number;
    country_id: number;
    first_name: string;
    last_name: string;
    company: string;
    vat_identification_number: string;
    prices_including_vat: number;
    street: string;
    house_number: string;
    zip: string;
    city: string;
    region: string;
    phone: string;
    state: string;
    newsletter: number;
    fax: any;
    type: string;
    amount: string;
    credit_limit: string;
    payment_deadline_days: number;
    payment_default_gateway: number;
    deleted_at: any;
    invoice_email: string;
    salutation: string;
    notes: any;
    domain_min_marge: string;
    domain_max_marge: string;
    domain_marge_percent: number;
    api_token: string;
    department: any;
    user_id: any;
    position: any;
    migrated_at: any;
    google2fa_secret: any;
    parent_id: any;
    invoice_recipient_id: any;
    max_file_uploads_size: number;
    no_invoicing: number;
    email_template: string;
    contact_type_id: any;
}
