export interface INewsCardData {
    author: { 
        name: string;
        id:string;
        image: string;
        verified: boolean;
    };
    tags: string[];
    isFeatured: boolean;
    _id: string;
    publishedDate: string;
    title: string;
    slug: string;
    content: string;
    category: string;
    imageUrl: string;
    status: string;
};

export interface INewsCardApiResponse {
    success: boolean;
    errorMsg: string;
    response: {
        data: {
            kRecentNews: INewsCardData[]
        }
    }
}