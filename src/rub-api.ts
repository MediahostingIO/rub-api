import Options from "./types/options";
import RubUtils from "./utils/rubUtils";
import DomainController from "./controller/domians/DomainController";
import Licenses from "./controller/licenses";
import General from "./controller/general";
import TeamspeakController from "./controller/teamspeak/TeamspeakController";
import ResellerController from "./controller/reseller/ResellerController";
import DedicatedServerController from "./controller/dedicated_server/DedicatedServerController";
import VirtualServerController from "./controller/virtual_server/VirtualServerController";
import WebspaceController from "./controller/webspace/WebspaceController";

class RubApi {
    private readonly options: Options

    constructor(options: Options) {
        this.options = options;
        RubUtils.initialize(this.options)
    }

    public readonly domains = new DomainController()
    public readonly licenses = new Licenses()
    public readonly general = new General()
    public readonly teamspeak = new TeamspeakController()
    public readonly reseller = new ResellerController()
    // tslint:disable-next-line:variable-name
    public readonly dedicated_server = new DedicatedServerController()
    // tslint:disable-next-line:variable-name
    public readonly virtual_server = new VirtualServerController()
    public readonly webspace = new WebspaceController()
}

export { RubApi };
