import RubUtils from "../../utils/rubUtils";
import { VirtualServersResponse, VirtualServerResponse } from "../../types/virtual_server/VirtualServer";
import {StatusResponse} from "../../types/virtual_server/Status";

export default class VirtualServerController {
    public getAllServers(): Promise<VirtualServersResponse> {
        return RubUtils.call('/vserver', { method: 'GET' })
    }

    public getServer(serverId: number): Promise<VirtualServerResponse> {
        return RubUtils.call('/vserver/show', { method: 'GET', params: { serverId } })
    }

    public getStatus(serverId: number): Promise<StatusResponse> {
        return RubUtils.call('/vserver/status', { method: 'GET', params: { serverId } })
    }
}