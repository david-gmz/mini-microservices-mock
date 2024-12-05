import React from "react";

import axios from "axios";
import { API_COMMENTS_URL } from "../lib/queries";
import { Comment, CommentProps, Comments } from "../types";

export default function CommentList({ postId }: CommentProps) {
    const [comments, setComments] = React.useState<Comments>([]);

    React.useEffect(() => {
        const fetchComment = async () => {
            const res = await axios.get(
                `${API_COMMENTS_URL}${postId}/comments`
            );

            setComments(res.data);
        };
        fetchComment();
    }, [postId]);
    const renderedComments = comments.map((comment: Comment) => (
        <li key={comment.id}>{comment.content}</li>
    ));
    return <ul>{renderedComments}</ul>;
}
