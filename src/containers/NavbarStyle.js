import styled from "styled-components";
import {Link} from 'react-router-dom' ;

export const NavbarSection = styled.div `
padding: 5px 0;
overflow: hidden;
background: #fff;
// position: relative;
border-bottom: 1px solid #000
`
export const Logo = styled.div `
width: 50%;
float: left;
clear :both;
`
export const LogoText = styled.h2 `
    font-size: 50px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
 `
 export const Span = styled.span `
 color : #ff9933;
 `
export const UlList = styled.ul`
    width: 25%;
    float: right;
    margin-top: 10px;
    list-style: none;
    padding: 0;
    font-size: 17px;
    
`
export const ListItem = styled.li `
    display: inline-block;
    
`
export const Anchor = styled.a `
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover {
        color: #eb5424;
    }
`
export const StyledLink = styled(Link)`
display: block;
color: #222;
text-decoration: none !important;
padding: 10px 15px;
font-weight: bold;
&:hover {
    color: #eb5424;
}
`