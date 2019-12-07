import React from "react";

const LikeComponent = ({ liked, item, onLike }) => {
  return (
    <React.Fragment>
      <i
        className={liked === true ? "fa fa-heart" : "fa fa-heart-o"}
        aria-hidden="true"
        onClick={() => {
          onLike(item);
        }}
      ></i>
    </React.Fragment>
  );
};

export default LikeComponent;
