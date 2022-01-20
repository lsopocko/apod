import styled from "styled-components"

interface GalleryProps {
    className?: string;
    pictures: any[];
}

function Gallery({ className, pictures }: GalleryProps) {
    return (
        <div className={className}>
            { pictures.map((picture, index) =>  
                <div className="tile" key={`apod-${index}`}>
                    <img src={picture.url} />
                </div>) 
            }
        </div>
    )
}

export default styled(Gallery)`
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .tile {
        opacity: 0.4;
        transition: opacity 0.3s ease-in-out;

        &:hover {
            opacity: 1;
        }
    }

    .tile:nth-child(1){
        grid-column: span 4;
        grid-row: span 2;
    }
    
    .tile:nth-child(2),
    .tile:nth-child(3){
        grid-column: span 2;
    }
    
    .tile:nth-child(4),
    .tile:nth-child(5){
        grid-column: span 3;
    }

    .tile:nth-child(6){
        grid-column: span 4;
        grid-row: span 2;
    }
    
    .tile:nth-child(7),
    .tile:nth-child(8){
        grid-column: span 2;
    }

    .tile:nth-child(9),
    .tile:nth-child(10),
    .tile:nth-child(11){
        grid-column: span 2;
    }
`;