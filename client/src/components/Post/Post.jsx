import './post.css';
import React from 'react';
import { Link } from 'react-router-dom';
export default function Post({ post }) {
  const PF = 'http://localhost:8080/images/';
  return (
    <div className="post">
      <Link to={`/post/${post._id}`} className="link">
        {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}

        <div className="postInfo">
          <div className="postCatagories">
            {post.categories.map((c) => (
              <span className="postCatagorie">{c.name}</span>
            ))}
          </div>
          <span className="postTitle">{post.title}</span> <hr />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDescription">{post.desc}</p>
      </Link>
    </div>
  );
}
