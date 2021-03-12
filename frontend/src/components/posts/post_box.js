import React from "react";
import "../../styles/post_box.css";

const PostBox = (props) => {
  return (
    <div className="Postbox-Container">
      <button className={props.is_expired ? "expired" : "active"}>
        {props.is_expired ? "Expired" : "Active"}
      </button>
      <p>{props.text}</p>
      <button className="delete" onClick={() => props.deletePost(props.post._id)}>
        Delete
      </button>
    </div>
  );
};

export default PostBox;
