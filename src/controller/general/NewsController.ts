import RubUtils from "../../utils/rubUtils";
import {NewsResponse, NewsSingleResponse} from "../../types/general/news";

export default class NewsController {
    public getAllNews(): Promise<NewsResponse> {
        return RubUtils.call('/news', { method: "GET" })
    }

    public getNews(newsId: number): Promise<NewsSingleResponse> {
        return RubUtils.call('/news/show', { method: "GET", params: { news: newsId } })
    }
}
