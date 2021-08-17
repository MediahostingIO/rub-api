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
  ide0: BlockstatSingle | null;
  ide1: BlockstatSingle;
  ide2: BlockstatSingle | null;
  ide3: BlockstatSingle | null;
  ide4: BlockstatSingle | null;
  scsi0: BlockstatSingle;
  scsi1: BlockstatSingle | null;
  scsi2: BlockstatSingle | null;
  scsi3: BlockstatSingle | null;
  scsi4: BlockstatSingle | null;
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

export interface BlockstatSingle {
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