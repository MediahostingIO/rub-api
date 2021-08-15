import {AccountResponse} from "../../types/general/account";
import RubUtils from "../../utils/rubUtils";

export default class AccountController {
    public get(): Promise<AccountResponse> {
        return RubUtils.call('/account', { method: "GET" })
    }
}
