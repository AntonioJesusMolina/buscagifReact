import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="col-4 ">
      <div class="card bg-dark text-white " >
       
        <img className="card-img-top" src={url} alt={title} />
        <div class="card-body">
          <p class="card-text">{title}</p>
        </div>
      </div>
    </div>
  );
};
