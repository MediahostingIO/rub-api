export interface NameserversResponse {
    nameservers: Nameserver[]
}

export interface NameserverResponse {
    nameserver: Nameserver
}

export interface Nameserver {
    id: number;
    hostname: string;
    created_at: string;
    updated_at: string;
}
