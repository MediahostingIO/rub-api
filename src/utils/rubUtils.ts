import Options from "../types/options";
import axios, {Method} from "axios";

export default class RubUtils {
    private static host: string;
    private static apiKey: string;

    public static initialize(options: Options): void {
        this.host = options.host ?? "https://api.reselling.services/api/v1";
        this.apiKey = options.apiKey;
    }

    public static call(url: string, options?: { params?: any, method?: Method }): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.request({
                url: this.host + url,
                method: options.method ?? 'POST',
                params: {
                    api_token: this.apiKey,
                    ...options.params
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(value => {
                    if (value.data.messages.errors < 1) {
                        resolve(value.data.data)
                    } else {
                        reject(value.data.messages.errors)
                    }
                })
                .catch(reason => reject(reason.response ?? reason));
        });
    }

}
