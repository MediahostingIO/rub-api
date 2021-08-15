import RubUtils from "../../utils/rubUtils";
import {NewsResponse, NewsSingleResponse} from "../../types/general/news";

export default class NewsController {
    public getAllNews(): Promise<NewsResponse> {
        return RubUtils.call('/reseller/news', { method: "GET" })
    }

    public getNews(newsId: number): Promise<NewsSingleResponse> {
        return RubUtils.call('/reseller/news/show', { method: "GET", params: { news: newsId } })
    }

    public create(subject: string, text: string, tag?: string): Promise<NewsSingleResponse> {
        return RubUtils.call('/reseller/news/create', { method: "POST", params: { subject, text, tag } })
    }

    public update(newsId: number, subject: string, text: string, tag?: string): Promise<NewsSingleResponse> {
        return RubUtils.call('/reseller/news/update', { method: "POST", params: { newsId, subject, text, tag } })
    }

    public delete(newsId: number): Promise<NewsSingleResponse> {
        return RubUtils.call('/reseller/news/delete', { method: "DELETE", params: { newsId } })
    }
}
