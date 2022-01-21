import styled from "styled-components";

interface AlertProps {
    className?: string;
    message: string;
    title: string;
}

const Alert = ({className, title, message}: AlertProps) => {
    return (
        <div className={className}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}

export default styled(Alert)`
    background: #ff0000;
    color: #fff;
    width: 300px;
    position: fixed;
    top: 50%;
    z-index: 1000;
    left: calc(50% - 150px);
    padding: 10px;

    h2 {
        font-size: 13px;
        font-weight: 500;
    }
    
    p {
        font-size: 11px;
    }
`