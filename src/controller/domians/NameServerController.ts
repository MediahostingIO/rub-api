import RubUtils from "../../utils/rubUtils";
import { NameserverResponse, NameserversResponse } from "../../types/domains/nameserver";

export default class NameServerController {
    public getNameservers(): Promise<NameserversResponse> {
        return RubUtils.call('/domain/nameserver', { method: 'GET' })
    }

    public getNameserver(hostname: string): Promise<NameserverResponse> {
        return RubUtils.call('/domain/nameserver/show', { method: 'GET', params: { hostname } })
    }

    public create(hostname: string): Promise<NameserverResponse> {
        return RubUtils.call('/domain/nameserver/create', { method: 'POST', params: { hostname } })
    }

    public delete(hostname: string): Promise<NameserverResponse> {
        return RubUtils.call('/domain/nameserver/delete', { method: 'DELETE', params: { hostname } })
    }
}
