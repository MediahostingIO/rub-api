import RubUtils from "../../utils/rubUtils";
import {
    CountriesResponse,
    HandleDTO,
    HandleResponse,
    HandlesResponse,
    HandleUpdateDto
} from "../../types/domains/handle";

export default class HandleController {
    public getHandles(): Promise<HandlesResponse[]> {
        return RubUtils.call('/domain/handle', {method: 'GET'})
    }

    public getHandle(): Promise<HandleResponse> {
        return RubUtils.call('/domain/handle', {method: 'GET'})
    }

    public getAllCountries(): Promise<CountriesResponse> {
        return RubUtils.call('/domain/handle/countries', {method: 'GET'})
    }

    public create(data: HandleDTO): Promise<HandleResponse> {
        return RubUtils.call('/domain/handle/create', {method: 'POST', params: data})
    }

    public update(data: HandleUpdateDto): Promise<HandleResponse> {
        return RubUtils.call('/domain/handle/update', {method: 'POST', params: data})
    }

    public delete(handle: string): Promise<HandleResponse> {
        return RubUtils.call('/domain/handle/delete', {method: 'DELETE', params: {handle}})
    }
}
