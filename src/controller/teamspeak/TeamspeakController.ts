import RubUtils from "../../utils/rubUtils";
import {TeamspeakInstanceResponse, TeamspeakInstancesResponse, TSInstance} from "../../types/teamspeak/teamspeak";
import {DdosAlertsResponse} from "../../types/general/ddosAlerts";

export default class TeamspeakController {
    public getAllTeamspeakInstances(): Promise<TeamspeakInstancesResponse> {
        return RubUtils.call('/teamspeak_instance', { method: 'GET' })
    }

    public getTeamspeakInstance(instance: number): Promise<TeamspeakInstanceResponse> {
        return RubUtils.call('/teamspeak_instance/show', { method: 'GET', params: { instance } });
    }

    public getAllTeamspeakInstanceDdosAlerts(instance: number): Promise<DdosAlertsResponse> {
        return RubUtils.call('/teamspeak_instance/ddos_alert', { method: 'GET', params: { instance } });
    }

    public start(instance: number): Promise<TSInstance> {
        return RubUtils.call('/teamspeak_instance/start', { method: 'POST', params: { instance } });
    }

    public stop(instance: number): Promise<TSInstance> {
        return RubUtils.call('/teamspeak_instance/stop', { method: 'POST', params: { instance } });
    }

    public restart(instance: number): Promise<TSInstance> {
        return RubUtils.call('/teamspeak_instance/restart', { method: 'POST', params: { instance } });
    }

    public restQueryPassword(instance: number): Promise<TSInstance> {
        return RubUtils.call('/teamspeak_instance/reset_query_password', { method: 'POST', params: { instance } });
    }

    public settings(instance: number, title?: string): Promise<TSInstance> {
        return RubUtils.call('/teamspeak_instance/settings', { method: 'POST', params: { instance, title } });
    }

    public getWhitelist(instance: number): Promise<{ addresses: string[] }> {
        return RubUtils.call('/teamspeak_instance/whitelist', { method: 'GET', params: { instance } });
    }

    public whitelistAddIP(instance: number, address: string): Promise<any> {
        return RubUtils.call('/teamspeak_instance/whitelist/add', { method: 'POST', params: { instance, address } });
    }

    public whitelistRemoveIP(instance: number, address: string): Promise<{ addresses: string[] }> {
        return RubUtils.call('/teamspeak_instance/whitelist/remove', { method: 'DELETE', params: { instance, address } });
    }
}
