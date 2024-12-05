export interface Post {
    id: string;
    title?: string;
}
export interface Comment {
    id: string;
    content?: string;
}

export type Comments = Comment[];

export interface CommentProps {
    postId: string;
}
