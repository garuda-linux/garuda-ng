export interface NewsModel {
    newsData: NewsData[],
    //newsConfig?: NewsConfig,
};

export interface NewsData {
    newsId: number,
    newsTime: string,
    newsTitle: string,
    newsLink: string,
};

// export interface NewsConfig {

// };