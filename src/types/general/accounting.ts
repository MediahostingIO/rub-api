export interface BalanceResponse {
    balance: string;
    creditLimit: string;
    reservedAmount: string;
    availableAmount: string;
    nextInvoiceGeneration: string;
    reservedPositions: ReservedPosition[]
}

export interface ReservedPosition {
    title: string,
    description: string,
    quantity: string;
    netto: string,
    discount: string
}
