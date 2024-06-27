export interface Posts {
    title: string;
    description: string;
    date: string
}

export interface PostsList {
    [id: string]: Posts;
}