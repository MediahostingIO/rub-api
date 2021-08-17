import {Address, Ip4addresses, Ip6addresses, IpAddress, IpAddressesResponse} from "../general/ipaddress";

export interface VirtualServersResponse {
    servers: VirtualServers[];
}

export interface VirtualServerResponse {
    server: VirtualServer;
}

export interface VirtualServers {
  id: number;
  title: string;
  hostname: string;
  cores: number;
  memory: number;
  disk: number;
  ip_addresses: number;
  ip6_addresses: number;
  max_backups: number;
  max_scheduled_tasks: number;
}

export interface VirtualServer {
  id: number;
  title: string;
  hostname: string;
  cores: number;
  memory: number;
  disk: number;
  ip_addresses: number;
  ip6_addresses: number;
  max_backups: number;
  max_scheduled_tasks: number;
  password: string;
  template_id: number;
  template_title: string;
  addresses: IpAddress[];
  addresses4: Ip4addresses[];
  addresses6: Ip6addresses[];
  current_traffic: number;
  prices: VirtualServerPrices;
  worth: VirtualServerWorth;
}

export interface VirtualServerPrices {
  CORE: number;
  MEMORY: number;
  DISK: number;
  IP_ADDRESS: number;
  IP6_ADDRESS: number;
  BACKUP: number;
  TRAFFIC: number;
}

export interface VirtualServerWorth {
  monthly: number;
  hourly: number;
}