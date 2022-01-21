import { useCallback, useState } from "react";
import styled from "styled-components";

interface InfoboxProps {
  className?: string;
  title: string;
  description: string;
  date: string;
}

function Infobox({ className, title, description, date }: InfoboxProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  let trimmedTitle = title.length > 33 ? `${title.substring(0, 33).trim()}...` : title;

  return (
    <div className={className} role="infobox">
      <h1 title={title} onClick={toggleDescription}><small>{date}</small> {trimmedTitle} {isExpanded ? <>&laquo;</> : <>&raquo;</>}</h1>
      <p className={`description ${isExpanded && "is-expanded"}`}>{description}</p>
    </div>
  )
}

export default styled(Infobox)`
    color: #fff;

    h1 {
        padding: 10px;
        background: rgba(36,49,67, 0.8);
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        font-size: 16px;
        font-weight: 500;
        margin: 0;
        width: 80%;
        height: 30px;
        position: relative;
        cursor: pointer;
        
        small {
            display: block;
            font-size: 10px;
            line-height: 11px;
            opacity: 0.6;
        }
    }

    .description {
        font-size: 12px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        line-height: 16px;
        display: none;
        padding: 10px;
        margin: 0;
        background: rgba(36,49,67, 0.8);

        &.is-expanded {
            display: block;
        }
    }
`;