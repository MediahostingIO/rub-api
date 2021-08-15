export interface PriceResponse {
    prices: Price[]
}
export interface PriceCsvResponse {
    csv: string
}

export interface Price {
    tld: string;
    create: string;
    renew: string;
    transfer: string;
    update: string;
    ownerchange: string;
    restore: string;
}

export interface PromotionPriceResponse {
    promotions: PromotionPrice[]
}

export interface PromotionPrice {
    extension: string;
    action: string;
    price: string;
    start_at: string;
    end_at: string;
    years: number;
}
