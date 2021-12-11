import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src={url} alt={title} />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
      </div>
    </div>
  );
};
