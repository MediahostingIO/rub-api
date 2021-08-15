import RubUtils from "../../utils/rubUtils";
import {DdosAlertResponse, DdosAlertsResponse} from "../../types/general/ddosAlerts";

export default class DdosAlertController {
    public getAllDdosAlerts(): Promise<DdosAlertsResponse> {
        return RubUtils.call('/ddos_alert', { method: "GET" })
    }

    public getAllDdosAlert(alertId: number): Promise<DdosAlertResponse> {
        return RubUtils.call('/ddos_alert/show', { method: "GET", params: { alertId } })
    }
}
