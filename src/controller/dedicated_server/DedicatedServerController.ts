import RubUtils from "../../utils/rubUtils";
import {
    DedicatedServersResponse,
    ServerReinstall,
    ServerTemplatesResponse
} from "../../types/dedicated_server/dedicated_server";

export default class DedicatedServerController {
    public getServers(): Promise<DedicatedServersResponse> {
        return RubUtils.call('/dedicated_server', { method: 'GET' });
    }

    public getServer(serverId: number): Promise<DedicatedServersResponse> {
        return RubUtils.call('/dedicated_server/show', { method: 'GET', params: { serverId } });
    }

    public getStatus(serverId: number): Promise<DedicatedServersResponse> {
        return RubUtils.call('/dedicated_server/status', { method: 'GET', params: { serverId } });
    }

    public startServer(serverId: number): Promise<DedicatedServersResponse> {
        return RubUtils.call('/dedicated_server/start', { method: 'POST', params: { serverId } });
    }

    public stopServer(serverId: number): Promise<DedicatedServersResponse> {
        return RubUtils.call('/dedicated_server/stop', { method: 'POST', params: { serverId } });
    }

    public resetServer(serverId: number): Promise<DedicatedServersResponse> {
        return RubUtils.call('/dedicated_server/reset"', { method: 'POST', params: { serverId } });
    }

    public reinstallServer(data: ServerReinstall): Promise<DedicatedServersResponse> {
        return RubUtils.call('/dedicated_server/reinstall', { method: 'POST', params: data });
    }

    public getTemplates(serverId: number): Promise<ServerTemplatesResponse> {
        return RubUtils.call('/dedicated_server/template', { method: 'GET', params: { serverId } });
    }

    public getKVMConsole(serverId: number): Promise<any> {
        return RubUtils.call('/dedicated_server/download', { method: 'GET', params: { serverId } });
    }

    public resetKVMConsole(serverId: number): Promise<[]> {
        return RubUtils.call('/dedicated_server/reset', { method: 'POST', params: { serverId } });
    }
}
