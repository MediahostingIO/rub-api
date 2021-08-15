import AccountController from "./AccountController";
import AccountingController from "./AccountingController";
import IPAddressController from "./IPAddressController";
import DdosAlertController from "./DdosAlertController";
import NewsController from "./NewsController";

export default class General {
    public account = new AccountController()
    public accounting = new AccountingController()
    public ipAddress = new IPAddressController()
    public ddosAlert = new DdosAlertController()
    public news = new NewsController()
}
