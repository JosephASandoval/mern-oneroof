import React from "react";
import "../../styles/post_box.css";

const PostBox = ({ is_expired, text, deletePost, post, date}) => {


  return (
    <div className="Postbox-Container">
      <button className={is_expired ? "expired" : "active"}>
        {is_expired ? "Expired" : "Active"}
      </button>
      <p>{text}</p>
      <p>{date}</p>
      <button className="delete" onClick={() => deletePost(post._id)}>
        Delete
      </button>
    </div>
  );
};

export default PostBox;
