export interface HandlesResponse {
    handles: HandlesResponse
}

export interface HandleResponse {
    handle: Handle
}

export interface Handle {
    id: number;
    handle: string;
    type: string;
    sex: string;
    firstname: string;
    lastname: string;
    organisation: string;
    street: string;
    number: string;
    postcode: string;
    city: string;
    region: string;
    country: string;
    phone: string;
    fax: string;
    email: string;
    idcard: string;
    idcardissuedate: string;
    idcardauthority: string;
    taxnr: string;
    vatnr: string;
    dateofbirth: string;
    countryofbirth: string;
    placeofbirth: string;
    regionofbirth: string;
    registrationnumber: string;
    protection: boolean;
}

export interface HandleDTO {
    type: "PERS" | "ORG"
    sex: "MALE" | "FEMALE"
    firstName: string
    lastName: string
    street: string
    number: string
    postcode: string
    city: string
    region: string
    country: string
    email: string
    organization?: string
    phone?: string
    fax?: string
}

export interface HandleUpdateDto extends HandleDTO {
    handle: string
}

export interface CountriesResponse {
    countries: Country[]
}

export interface Country {
    code: string
    title: string
}
