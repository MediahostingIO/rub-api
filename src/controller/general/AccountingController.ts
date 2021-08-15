import RubUtils from "../../utils/rubUtils";
import {BalanceResponse} from "../../types/general/accounting";

export default class AccountingController {
    public getBalance(): Promise<BalanceResponse> {
        return RubUtils.call('/accounting/balance', { method: "GET" })
    }
}
