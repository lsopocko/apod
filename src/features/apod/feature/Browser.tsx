import { useCallback, useEffect } from "react"
import styled from "styled-components";
import Button from "../../../ui/Button";
import Infobox from "../../../ui/Infobox";
import Spinner from "../../../ui/Spinner";
import useFavorites from "../data-access/useFavorites";
import useNasaApod from "../data-access/useNasaApod";

interface ApodBrowserProps {
    className?: string;
}

function ApodBrowser({ className }: ApodBrowserProps) {
    const { getPictureOfTheDay, isLoading, pictureOfTheDay } = useNasaApod();
    const { add } = useFavorites();

    let { url, title, explanation, date } = pictureOfTheDay || {};

    useEffect(() => {
        getPictureOfTheDay();
    }, []);

    const handleNextClick = useCallback(() => {
        getPictureOfTheDay();
    }, []);

    const handleSaveClick = useCallback(() => {
        add(pictureOfTheDay);
    }, [pictureOfTheDay]);

    return (
        <div className={className}>
            <div className="viewport">
                {isLoading && <Spinner className="spinner" />}
                { (title && explanation && date) && <Infobox title={title} description={explanation} date={date} /> }
                <img className={`${isLoading || url === '' ? 'fade' : ''}`} src={url} />
                <img className="blur" src={url} />

                <div className="buttons">
                    <Button onClick={handleSaveClick} disabled={isLoading}>Zapisz</Button> 
                    <Button onClick={handleNextClick} disabled={isLoading}>Nastepne</Button>
                </div>
            </div>
        </div>
    )
}

export default styled(ApodBrowser)`
    width: 100vw;
    height: 100vh;
    margin: auto;

    img:not(.blur) {
        max-height: calc(100vh - 30px);
        max-width: 100vw;
        display: block;
        border-radius: 3px;
        margin: auto;
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
        z-index: 20;

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

    .viewport {
        display: flex;
        width: 100vw;
        height: 100vh;
        position: relative;
        align-items: center;
    }

    .spinner {
        position: absolute;
        top: calc(50% - 45px);
        left: calc(50% - 45px);
        z-index: 30;
    }

    ${Infobox} {
        position: absolute;
        z-index: 100;
        top: 20px;
        width: 50vw;
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