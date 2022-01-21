import styled from "styled-components";
import { Button, Infobox, Spinner } from "../../../ui";
import Apod from "./Apod";

interface ApodBrowserProps {
  className?: string;
  onNext: () => void;
  onSave: () => void;
  url?: string;
  title?: string;
  description?: string;
  date?: string;
  isLoading: boolean;
}

function ApodBrowser({ className, onNext, onSave, title, url, description, isLoading, date }: ApodBrowserProps) {
  return (
    <div className={className}>
      {isLoading && <Spinner />}
      {(title && description && date) && <Infobox title={title} description={description} date={date} />}
      {url && <Apod url={url} isLoading={isLoading}></Apod>}

      <div className="buttons">
        <Button onClick={onSave} disabled={isLoading}>Zapisz</Button>
        <Button onClick={onNext} disabled={isLoading}>Nastepne</Button>
      </div>
    </div>
  )
}

export default styled(ApodBrowser)`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;
  align-items: center;

  ${Apod} {
    width: 100vw;
    height: 100vh;
    z-index: 50;
  }

  ${Spinner} {
    position: absolute;
    top: calc(50% - 45px);
    left: calc(50% - 45px);
    z-index: 60;
  }

  ${Infobox} {
    position: absolute;
    z-index: 100;
    top: 20px;
    width: 50vw;

    @media (max-width: 768px) {
      width: 98vw;
    }
  }

  .buttons {
    z-index: 100;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;

    Button:first-child {
        margin-right: 5px;
    }
  }
`;