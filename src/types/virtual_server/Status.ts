export interface StatusResponse {
  status: Status;
  statusTitle: string;
  runningInstallation: any;
  diskInformation: DiskInformation;
}

export interface Status {
  uptime: number;
  nics: Nics;
  freemem: number;
  name: string;
  disk: number;
  'proxmox-support': Proxmox_Support;
  diskwrite: number;
  diskread: number;
  vmid: string;
  maxmem: number;
  pid: string;
  'running-qemu': string;
  blockstat: Blockstat;
  ha: Ha;
  status: string;
  ballooninfo: Ballooninfo;
  agent: number;
  maxdisk: number;
  mem: number;
  template: string;
  cpu: number;
  qmpstatus: string;
  netout: number;
  'running-machine': string;
  cpus: number;
  balloon: number;
  netin: number;
}

export interface Nics {
  tap402i0: { netout: string, netin: string };
}

// tslint:disable-next-line:class-name
export interface Proxmox_Support {
  'pbs-library-version': string;
  'pbs-dirty-bitmap': boolean;
  'pbs-masterkey': boolean;
  'pbs-dirty-bitmap-savevm': boolean;
  'pbs-dirty-bitmap-migration': boolean;
  'query-bitmap-info': boolean;
}

export interface Blockstat {
  ide1: string[];
  scsi0: string[];
}

export interface Ha {
  managed: number;
}

export interface Ballooninfo {
  total_mem: number;
  major_page_faults: number;
  mem_swapped_out: number;
  max_mem: number;
  actual: number;
  free_mem: number;
  minor_page_faults: number;
  mem_swapped_in: number;
  last_update: number;
}

export interface DiskInformation {
  name: string;
  type: string;
  used_bytes: number;
  total_bytes: number;
}