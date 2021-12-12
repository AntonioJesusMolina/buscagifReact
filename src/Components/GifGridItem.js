import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div>
      <div class="card">
        <img class="card-img-top" src={url} alt={title} />
        <div class="card-body">
          <p class="card-text">{title}</p>
        </div>
      </div>
    </div>
  );
};
