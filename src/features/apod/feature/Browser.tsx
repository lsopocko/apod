import { useCallback, useEffect } from "react"
import styled from "styled-components";
import Button from "../../../ui/Button";
import Spinner from "../../../ui/Spinner";
import useNasaApod from "../data-access/useNasaApod";

interface ApodBrowserProps {
    className?: string;
}

function ApodBrowser({ className }: ApodBrowserProps) {
    const { request, isLoading, response } = useNasaApod();

    let imageUrl = response && response[0].url;
    let prevImage = imageUrl;

    useEffect(() => {
        request();
    }, []);

    const handleNextClick = useCallback(() => {
        prevImage = imageUrl;
        imageUrl = '';
        request();
    }, []);

    const handleSaveClick = useCallback(() => {
        console.log('save');
    }, []);

    return (
        <div className={className}>
            <div className="viewport">
                {isLoading && <Spinner className="spinner" />}
                <img className={`${isLoading || imageUrl === '' ? 'fade' : ''}`} src={imageUrl} />
                <img className="blur" src={imageUrl} />
                <div className="description">
                    { response&& response[0].explanation }
                </div>
            </div>
            <div className="buttons">
                <Button onClick={handleSaveClick} disabled={isLoading}>Zapisz</Button> 
                <Button onClick={handleNextClick} disabled={isLoading}>Nastepne</Button>
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
            opacity: 0.1;
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

    .description {
        font-size: 12px;
        position: absolute;
        color: #fff;
        z-index: 30;
        width: 90vh;
        bottom: 100px;
        margin: auto;
        padding: 10px;
        background: rgba(0, 0, 0, 0.8);
        border-radius: 5px;
    }

    .spinner {
        position: absolute;
        top: calc(50% - 45px);
        left: calc(50% - 45px);
        z-index: 30;
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