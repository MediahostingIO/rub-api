import Options from "./types/options";
import RubUtils from "./utils/rubUtils";
import DomainController from "./controller/domians/DomainController";

class RubApi {
    private readonly options: Options

    constructor(options: Options) {
        this.options = options;
        RubUtils.initialize(this.options)
    }

    public domains = new DomainController()
}

export { RubApi };
