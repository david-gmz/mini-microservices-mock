import React from "react";
import axios from "axios";
import { API_POSTS_URL } from "../lib/queries";

export default function PostCreate() {
    const [enterTitle, setEnterTitle] = React.useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setEnterTitle(e.target.value);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.post(API_POSTS_URL, { title: enterTitle });
        setEnterTitle("");
    };
    return (
        <section className="section">
            <h1>Mini Microservice App</h1>
            <form onSubmit={handleSubmit}>
                <fieldset className="fieldset">
                    <legend className="legend">Create Post</legend>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={enterTitle}
                            onChange={ handleChange }
                            placeholder="Enter a title"
                        />
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </fieldset>
            </form>
        </section>
    );
}
