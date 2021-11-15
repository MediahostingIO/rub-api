export interface WebspaceResponse {
  id: number;
  user_id: number;
  plesk_id: number;
  host_name: string;
  package: string;
  login_username: string;
  login_password: string;
  description: string;
  created_at: string;
  updated_at: string;
  termination_date: string;
  next_termination_date: string;
  next_accounting_date: string;
}

export interface WebspacePackages {
  id: number;
  name: string;
}

export default interface WebspaceUsage {
  usage: Usage;
  limits: Limits;
  addresses: string[];
}

export interface Usage {
  clients: number;
  domains: number;
  subdomains: number;
  domain_aliases: number;
  disk_space: number;
  databases: number;
  mailboxes: number;
  traffic: number;
  traffic_yesterday: number;
}

export interface Limits {
  clients: number;
  domains: number;
  subdomains: number;
  domain_aliases: number;
  disk_space: number;
  databases: number;
  mailboxes: number;
  traffic: number;
}
