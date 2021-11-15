import RubUtils from "../../utils/rubUtils";
import WebspaceUsage, {WebspacePackages, WebspaceResponse} from "../../types/webspace/Webspace";

export default class WebspaceController {
    public getAllWebspaces(): Promise<WebspaceResponse[]> {
        return RubUtils.call('/webspace', { method: 'GET' })
    }

    public getWebspace(webspaceId: string): Promise<WebspaceResponse> {
        return RubUtils.call(`/webspace/show`, { method: 'GET', params: { webspaceId } })
    }

    public createWebspace(webspace: WebspaceResponse): Promise<WebspaceResponse> {
        return RubUtils.call('/webspace', { method: 'POST' })
    }

    public webspacePackages(): Promise<WebspacePackages[]> {
        return RubUtils.call(`/webspace/packages`, { method: 'GET' })
    }

    public webspaceUsage(webspaceId: string): Promise<WebspaceUsage> {
        return RubUtils.call(`/webspace/usage`, { method: 'GET', params: { webspaceId } })
    }

    public createWebspacePackage(packageId: string): Promise<WebspaceResponse> {
        return RubUtils.call(`/webspace/package`, { method: 'POST', params: { packageId } })
    }

    public updateWebspace(webspaceId: string, description: string): Promise<WebspaceResponse> {
        return RubUtils.call(`/webspace/settings`, { method: 'POST', params: { webspaceId, description } })
    }

    public webspaceSSO(webspaceId: string, clientIp: string): Promise<{ url: string }> {
        return RubUtils.call(`/webspace/sso`, { method: 'POST', params: { webspaceId, clientIp } })
    }
}
