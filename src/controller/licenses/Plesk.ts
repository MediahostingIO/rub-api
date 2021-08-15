import RubUtils from "../../utils/rubUtils";
import { PleskLicenseResponse, PleskLicensesResponse, PleskTypes } from "../../types/licenses/plesk/plesk";

export default class Plesk {
    public getLicenses(): Promise<PleskLicensesResponse> {
        return RubUtils.call('/license/plesk', { method: 'GET' })
    }

    public getLicense(license: string): Promise<PleskLicenseResponse> {
        return RubUtils.call('/license/plesk/show', { method: 'GET', params: { license } })
    }

    public create(type: PleskTypes): Promise<PleskLicenseResponse> {
        return RubUtils.call('/license/plesk/create', { method: 'POST', params: { type } })
    }

    public update(license: string, comment: string): Promise<PleskLicenseResponse> {
        return RubUtils.call('/license/plesk/edit', { method: 'POST', params: { license, comment } })
    }

    public delete(license: string, date: Date): Promise<PleskLicenseResponse> {
        return RubUtils.call('/license/plesk/delete', { method: 'DELETE', params: { license, date } })
    }

    public undelete(license: string): Promise<PleskLicenseResponse> {
        return RubUtils.call('/license/plesk/undelete', { method: 'POST', params: { license } })
    }

    public getBinding(license: string): Promise<PleskLicenseResponse> {
        return RubUtils.call('/license/plesk/binding', { method: 'GET', params: { license } })
    }

    public setBinding(license: string, address: string): Promise<PleskLicenseResponse> {
        return RubUtils.call('/license/plesk/binding', { method: 'POST', params: { license, address } })
    }
}
