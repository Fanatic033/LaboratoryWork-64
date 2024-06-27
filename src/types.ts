export interface Posts {
    id: string;
    title: string;
    description: string;
    date: string
}
export interface PostsMutation {
    id: string;
    title: string;
    description: string;
    date: string
}


export interface PostsList {
    [id: string]: Posts;
}