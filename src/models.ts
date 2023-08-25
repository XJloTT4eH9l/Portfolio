export interface PortfolioItem {
    id: number;
    title: string;
    img: string[];
    description: string;
    tools: string[];
    links: {
        github: string | null;
        deploy: string;
    };
}