import React  from 'react' ;
import {NavbarSection , Logo , LogoText , ListItem , UlList , Span ,StyledLink} from './NavbarStyle.js' ;

const Navbar = () =>  {
    return (
        <NavbarSection>
            <div className="container">
                <Logo>
                    <LogoText>Image<Span>Pro</Span></LogoText>
                </Logo>
                <UlList>
                    <ListItem><StyledLink to="/">Home</StyledLink></ListItem>
                    <ListItem><StyledLink to="/modules">Modules</StyledLink></ListItem>
                    <ListItem><StyledLink to="#">About</StyledLink></ListItem>
                    <ListItem><StyledLink to="/login">Log in</StyledLink></ListItem>
                </UlList>
            </div>
        </NavbarSection>
    );
}

export default Navbar;