import {DomainDTO, Domain, DomainResponse, DomainsResponse, UpdateDomain} from "../../types/domains/domains";
import RubUtils from "../../utils/rubUtils";
import HandleController from "./HandleController";
import NameServerController from "./NameServerController";
import DnsController from "./DnsController";
import PriceController from "./PriceController";

export default class DomainController {

    public handle = new HandleController()
    public nameserver = new NameServerController()
    public dns = new DnsController()
    public price = new PriceController()

    public getAllDomains(): Promise<DomainsResponse[]> {
        return RubUtils.call('/domain', { method: 'GET' })
    }

    public getDomain(domainName: string): Promise<DomainResponse> {
        return RubUtils.call('/domain/show', {method: 'GET', params: {domainName}})
    }

    public checkDomain(domainName: string): Promise<{ available: boolean }> {
        return RubUtils.call('/domain/check', { method: 'POST', params: { domainName } })
    }

    public getAuthCode(domainName: string): Promise<{authcode: string, domain: Domain}> {
        return RubUtils.call('/domain/authcode', { method: 'POST', params: { domainName } })
    }

    public create(data: DomainDTO): Promise<DomainResponse> {
        return RubUtils.call('/domain/create', { method: 'POST', params: data })
    }

    public update(data: UpdateDomain): Promise<DomainResponse> {
        return RubUtils.call('/domain/update', { method: 'POST', params: data })
    }

    public delete(domainName: string, date?: Date): Promise<DomainResponse> {
        return RubUtils.call('/domain/delete', { method: 'DELETE', params: {domainName, date} })
    }

    public unDelete(domainName: string, date?: Date): Promise<DomainResponse> {
        return RubUtils.call('/domain/undelete', { method: 'POST', params: { domainName, date } })
    }

    public restore(domainName: string): Promise<DomainResponse> {
        return RubUtils.call('/domain/restore', { method: 'POST', params: { domainName } })
    }
}
