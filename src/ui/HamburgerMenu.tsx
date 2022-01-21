import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface HamburgerMenuProps {
  className?: string;
}

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #fff;
    padding: 3px;
    background: rgba(255, 255, 255, 0.1);
    display: block;
    border-radius: 2px;

    &.active,
    &:hover {
      text-decoration: none;

      background: rgba(255, 255, 255, 0.3);
    }
`;

const HamburgerMenu = ({ className }: HamburgerMenuProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);


  return (
    <nav className={className}>
      <span role="menu" onClick={toggleMenu}>☰</span>

      <ul className={`${isExpanded && "is-expanded"}`}>
        <li onClick={toggleMenu}><StyledNavLink to="/">Przegladaj</StyledNavLink></li>
        <li onClick={toggleMenu}><StyledNavLink to="zapisane">Zapisane</StyledNavLink></li>
      </ul>
    </nav>
  )
}

export default styled(HamburgerMenu)`
    position: fixed;
    z-index: 120;
    top: 10px;
    right: 10px;
    color: #fff;
    background: rgba(36,49,67,1);
    padding: 5px;
    text-align: right;

    span {
        line-height: 10px;
        font-size: 20px;
        cursor: pointer;
    }

    ul {
        list-style-type: none;
        padding: 0;
        padding-top: 3px;
        margin: 0;
        text-align: left;
        display: none;
        font-size: 12px;

        &.is-expanded {
            display: block;
        }

        li {
          margin-bottom: 5px;
        }
    }
`;