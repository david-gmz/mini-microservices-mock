import React from "react";
import { API_COMMENTS_URL } from "../lib/queries";
import axios from "axios";
import { CommentProps } from "../types";

export default function CommentCreate({postId}:CommentProps) {
    const [enterComment, setEnterComment] = React.useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setEnterComment(e.target.value);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.post(`${API_COMMENTS_URL}${postId}/comments`, {
            content: enterComment
        });
        setEnterComment("");
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="comment">Any comment?</label>
                <input
                    className="form-cotrol"
                    type="text"
                    placeholder="Enter a comment"
                    id="comment"
                    value={ enterComment }
                    onChange={handleChange}
                />
            </div>
            <button className="btn btn-primary">Send your comment</button>
        </form>
    );
}
