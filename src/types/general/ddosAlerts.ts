export interface DdosAlertsResponse {
    alerts: DdosAlert[]
}

export interface DdosAlertResponse {
    alert: DdosAlert
}

export interface DdosAlert {
    id: number;
    address_value: string;
    attack_type: string;
    start_at: string;
    end_at: string;
    time_in_seconds: number;
}
