import RubUtils from "../../utils/rubUtils";
import {IpAddressesResponse, IpAddressResponse} from "../../types/general/ipaddress";

export default class IPAddressController {
    public getAllIpAddresses(): Promise<IpAddressesResponse> {
        return RubUtils.call('/address', { method: "GET" })
    }

    public getAllIpAddress(address: string): Promise<IpAddressResponse> {
        return RubUtils.call('/address/show', { method: "GET", params: { address } })
    }

    public setRDNS(address: string, rdns: string): Promise<IpAddressResponse> {
        return RubUtils.call('/address/rdns', { method: "POST", params: { address, rdns } })
    }
}
