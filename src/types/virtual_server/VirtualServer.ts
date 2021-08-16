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

export interface Blockstat {
  wr_operations: number;
  flush_operations: number;
  unmap_merged: number;
  idle_time_ns: number;
  invalid_unmap_operations: number;
  rd_total_time_ns: number;
  unmap_total_time_ns: number;
  wr_bytes: number;
  failed_rd_operations: number;
  rd_merged: number;
  rd_bytes: number;
  failed_flush_operations: number;
  account_failed: boolean;
  wr_merged: number;
  unmap_bytes: number;
  wr_total_time_ns: number;
  failed_unmap_operations: number;
  rd_operations: number;
  wr_highest_offset: number;
  failed_wr_operations: number;
  invalid_rd_operations: number;
  unmap_operations: number;
  invalid_wr_operations: number;
  account_invalid: boolean;
  flush_total_time_ns: number;
  invalid_flush_operations: number;
}