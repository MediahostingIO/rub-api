export interface NewsResponse {
    news: News[]
}

export interface NewsSingleResponse {
    news: News
}

export interface News {
    id: number;
    subject: string;
    text: string;
    tag: string;
    created_at: string;
    updated_at: string;
    user_id: string;
}
