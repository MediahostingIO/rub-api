export interface DNSResponse {
    id: number;
    name: string;
    nameUnicode: string;
    serial: number;
    refresh: number;
    retry: number;
    expire: number;
    ttl: number;
    records: Record[];
}

export interface Record {
    id: number;
    name: string;
    type: string;
    content: string;
    ttl: number;
    priority: number;
}
