export interface IpAddressesResponse {
    addresses: Address[];
    ip4addresses: Ip4addresses[];
    ip6addresses: Ip6addresses[];
}

export interface IpAddressResponse {
    address: Address
}

export interface Address {
    id: number;
    address: string;
    netmask: number;
    gateway: string;
    version: number;
    rdns: string;
    traffic_in: string;
    traffic_out: string;
    traffic_total: string;
}

export interface Ip4addresses {
    id: number;
    address: string;
    netmask: number;
    gateway: string;
    version: number;
    rdns: string;
}

export interface Ip6addresses {
    id: number;
    address: string;
    netmask: number;
    gateway: string;
    version: number;
    rdns: string;
}
