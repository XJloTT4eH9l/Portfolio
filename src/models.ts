export interface PortfolioItem {
    id: number;
    title: string;
    img: string[];
    description: string;
    tools: string[];
    links: {
        github: string;
        deploy: string;
    };
}