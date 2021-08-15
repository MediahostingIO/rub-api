export interface DedicatedServersResponse {
    servers: Dedicated_server[]
}

export interface DedicatedServerResponse {
    server: Dedicated_server
}

export interface Dedicated_server {
    id: number;
    title: string;
    processor: string;
    memory: string;
    disk: string;
    uplink: string;
    main_address: string;
    server_password: string;
    template_id: number;
    template_title: string;
}

export interface ServerTemplatesResponse {
    templates: Server_template[]
}

export interface Server_template {
    id: number;
    title: string;
    description: string;
}

export interface ServerReinstall {
    serverId: number
    template: number
    password?: string
    ssh_keys?: Array<string>
    commands?: Array<string>
    raid_level?: number
}
