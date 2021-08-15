import RubUtils from "../../utils/rubUtils";
import {SshKeyResponse, SshKeysResponse} from "../../types/general/sshkey";

export default class SshKeyController {
    public getAllKeys(): Promise<SshKeysResponse> {
        return RubUtils.call('/ssh_key', { method: "GET" })
    }

    public getKey(sshKeyId: number): Promise<SshKeyResponse> {
        return RubUtils.call('/ssh_key/show', { method: "GET", params: { sshKeyId } })
    }

    public create(sshKeyId: number, ssh_public_key: string): Promise<SshKeyResponse> {
        return RubUtils.call('/ssh_key/create', { method: "POST", params: { sshKeyId, ssh_public_key } })
    }

    public delete(sshKeyId: number): Promise<SshKeyResponse> {
        return RubUtils.call('/ssh_key/delete', { method: "DELETE", params: { sshKeyId } })
    }
}
