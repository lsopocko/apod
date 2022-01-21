import styled from "styled-components";

interface ApodProps {
  className?: string;
  isLoading: boolean;
  url: string;
}

function Apod({ className, isLoading, url }: ApodProps) {
  return (
    <div className={className}>
      <img alt="Nasa APOD" className={`crisp ${isLoading || url === "" ? "fade" : ""}`} src={url} />
      <img alt="Blured background" className="blur" src={url} />
    </div>
  )
}

export default styled(Apod)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  img.crisp {
    max-height: 100%;
    max-width: 100%;
    display: block;
    border-radius: 3px;
    margin: auto;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    z-index: 200;

    &.fade {
      opacity: 0;
    }
  }

  img.blur {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter: blur(40px);
    z-index: 10;
  }
`