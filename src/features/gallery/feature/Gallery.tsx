import React from "react";
import styled from "styled-components";
import { Infobox } from "../../../ui";

interface GalleryProps {
  className?: string;
  pictures: any[];
}

const Gallery = React.memo(({ className, pictures }: GalleryProps) => {
  return (
    <div className={className}>
      {pictures.map((picture, index) =>
        <div className="tile" key={`apod-${index}`}>
          <Infobox title={picture.title} description={picture.explanation} date={picture.date} />
          <img alt="Thumbnail" src={picture.url} />
        </div>)
      }
    </div>
  )
});

export default styled(Gallery)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .tile {
        opacity: 0.4;
        transition: opacity 0.3s ease-in-out;
        position: relative;

        &:hover {
            opacity: 1;
        }
    }

    ${Infobox} {
      position: absolute;
      z-index: 100;
      top: 20px;
      width: 90%;
  
      @media (max-width: 768px) {
        width: 100%;
      }
    }
`;