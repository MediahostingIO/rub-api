export interface PleskTypes {
    type: "PLSK_12_ADMIN_VPS" | "PLSK_12_PRO_VPS" | "PLSK_12_HOST_VPS" | "PLSK_12_ADMIN" | "PLSK_12_PRO" | "PLSK_12_HOST" | "PLSK_12_PRO_VPS_CLNX" | "PLSK_12_HOST_VPS_CLNX" | "PLSK_12_PRO_CLNX" | "PLSK_12_HOST_CLNX"
}

export interface PleskLicensesResponse {
    licenses: Plesk[]
}

export interface PleskLicenseResponse {
    license: Plesk
}

export interface Plesk {
    id: number,
    user_id: number,
    title: string,
    license: string,
    key: string,
    type: PleskTypes,
    used: number,
    ip_address: string,
    mac_address: string,
    date_register: string,
    date_update: string,
    expire: string,
    orderdate: string,
    comment: '',
    days: number,
    created_at: string,
    updated_at: string,
    deleted_at: null,
    additional_keys: AdditionalKey[]
    next_termination_date: string
}

export interface AdditionalKey {
    title: string,
    license: string,
    key: string
}
