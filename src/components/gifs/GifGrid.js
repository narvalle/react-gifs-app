import React from "react";
import PropTypes from "prop-types";
import useFetchGifs from "../../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      {loading ? (
        <img
          src="https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
          alt="gif_loading"
          className="center"
        />
      ) : (
        <>
          <h3>{`Result from: ${category}`}</h3>
          <div className="card-grid">
            {images.map((img) => (
              <GifGridItem key={img.id} {...img} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
