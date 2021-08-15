export interface SshKeysResponse {
    sshKeys: SSHKey[]
}

export interface SshKeyResponse {
    sshKey: SSHKey
}

export interface SSHKey {
    id: number;
    name: string;
    ssh_public_key: string;
    fingerprint: string;
    created_at: string;
}
