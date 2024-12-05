import React from "react";
import axios from "axios";
import { API_POSTS_URL } from "../lib/queries";
import CommentCreate from "./CommentCreate";
import { Post } from "../types";
import CommentList from "./CommentList";

export default function PostList() {
    const [posts, setPosts] = React.useState<Record<string, Post>>({});
    const fetchPosts = async () => {
        const res = await axios.get(API_POSTS_URL);

        setPosts(res.data);
    };
    React.useEffect(() => {
        fetchPosts();
    }, []);
    console.log("Posts", posts);
    const renderedPosts = Object.values(posts).map((post:Post) => {
        return (
            <article
                className="card"
                style={{ width: "30%", marginBottom: "20px" }}
                key={post.id}>
                <div className="card-body">
                    <h3>{ post.title }</h3>
                    <CommentList postId={post.id} />
                    <CommentCreate postId={post.id} />
                </div>
            </article>
        );
    });
    return (
        <section className="section">
            <h2>Posts</h2>
            <div className="cards">{renderedPosts}</div>
        </section>
    );
}
