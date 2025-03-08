export interface INewsCardProps {
    cardNewsData: {
        title: string;
        slug: string;
        imageUrl: string
    }
};
export interface LatestEventsCardProps {
    
    eventCardData: {
        id: number;
        title: string;
        date: string;
        description: string;
        venue: string;
        imageUrl: string;

    }
};