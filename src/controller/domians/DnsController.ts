import RubUtils from "../../utils/rubUtils";
import {DNSResponse} from "../../types/domains/dns";

export default class DnsController {
    public getAllDNSRecords(domainName: string): Promise<DNSResponse> {
        return RubUtils.call('/domain/dns', { method: 'GET', params: { domainName } })
    }

    public updateDNSRecords(domainName: string, records: string[]): Promise<DNSResponse> {
        return RubUtils.call('/domain/dns/update', { method: 'POST', params: { domainName, records } })
    }
}
