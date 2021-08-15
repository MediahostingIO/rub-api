import Options from "./types/options";
import RubUtils from "./utils/rubUtils";
import DomainController from "./controller/domians/DomainController";
import Licenses from "./controller/licenses";
import General from "./controller/general";
import TeamspeakController from "./controller/teamspeak/TeamspeakController";

class RubApi {
    private readonly options: Options

    constructor(options: Options) {
        this.options = options;
        RubUtils.initialize(this.options)
    }

    public domains = new DomainController()
    public licenses = new Licenses()
    public general = new General()
    public teamspeak = new TeamspeakController()
}

export { RubApi };
