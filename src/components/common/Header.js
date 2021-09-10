import { useState, useContext } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import styled, {ThemeContext} from "styled-components";
import Toggle from "./Toggle";

const HeaderWrapper = styled.header`
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 0 16px;
    position: fixed;
    top: 0;
    background: #d8b4f1;
    border-bottom: solid 3px black;

    .branding-text {
        margin: auto 0;
        font-size: 1.9em;
        font-family: Arial, Helvetica, sans-serif;
        text-shadow: -1px 1px 5px black;
    }
`;

const Menu = styled.nav`
    display: ${p => p.open ? 'block' : 'none'};
    font-family: 'Open Sans';
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    padding: 8px;
    box-sizing: border-box;
    border-bottom: solid 3px black;
    background-color: ${p => p.theme.bodyColor};

    @media(min-width: 768px) {
        display: flex;
        background: none;
        top: initial;
        left: initial;
        position: relative;
        width: initial;
        border-bottom: none;
        margin: auto 0 auto auto;
    }
`;

const Link = ({isActive, children, ...props}) => {
    return (
        <RouterLink {...props}>
            {children}
        </RouterLink>
    )
};

const StyledLink = styled(Link)`
    padding: 4px 8px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    text-shadow: -1px 1px 5px black;
    margin: auto 0;
    font-weight: ${p => p.isActive ? 'bold' : 'normal'};
    color: ${p => p.theme.bodyFontColor};
    text-decoration: none;
    font-size: ${p => p.isActive ? '1.5em' : '1.3em'};
`;

const MobileMenuIcon = styled.div`
    margin: auto 0 auto auto;
    width: 25px;
    min-width: 25px;
    padding: 5px;
    
    >div {
        height: 3px;
        background-color: black;
        margin: 5px 0;
        width: 100%;
    }

    @media(min-width: 768px) {
        display: none;
    }
`;

export const Header = () => {
    const {pathname} = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const {setTheme} = useContext(ThemeContext);
    const [toggleIsActive, setToggleIsActive] = useState(false);
    
    const switchMenu = () => {
        setMenuOpen(prevShowMenu => !prevShowMenu);
    };

    const toggleActiveHandler = () => {
        setTheme();
        setToggleIsActive(prevIsActive => !prevIsActive);
    };

    return (
        <HeaderWrapper>
            <p className="branding-text">Libre de TCA</p>
            <MobileMenuIcon onClick={switchMenu} >
                <div />
                <div />
                <div />
            </MobileMenuIcon>
            <Menu open={menuOpen}>
                <StyledLink to="/" isActive={pathname === '/'}>
                    Home
                </StyledLink>
                <StyledLink to="/blog" isActive={pathname === '/blog'}>
                    Blog
                </StyledLink>
                <StyledLink to="/login" isActive={pathname === '/login'}>
                    Login
                </StyledLink>
                <Toggle onToggle={toggleActiveHandler} isActive={toggleIsActive} />
            </Menu>
        </HeaderWrapper>
    )
};