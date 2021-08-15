export interface DomainsResponse {
    domains: Domain[];
}

export interface DomainResponse {
    domain: Domain;
}
export interface Domain {
    id: number;
    sld: string;
    tld: string;
    name: string;
    nameUnicode: string;
    ownerC: string;
    adminC: string;
    techC: string;
    zoneC: string;
    create: string;
    expire: string;
    delete: string;
    suspended_at: string;
    suspended_until: string;
    authinfo: string;
    status: string;
    zone_id: number;
    ns1: string;
    ns2: string;
    ns3: string;
    ns4: string;
    ns5: string;
}

export interface DomainDTO {
    domainName: string
    ownerC: string
    adminC: string
    techC: string
    zoneC: string
    ns1: string
    ns2: string
    ns3?: string
    ns4?: string
    ns5?: string
    authinfo?: string
    createZone?: boolean
}

export class UpdateDomain {
    public domainName: string
    public ownerC: string
    public adminC: string
    public techC: string
    public zoneC: string
    public ns1: string
    public ns2: string
    public ns3?: string
    public ns4?: string
    public ns5?: string
}