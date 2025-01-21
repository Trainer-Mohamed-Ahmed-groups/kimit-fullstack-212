import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';

function SiteNav() {

    const { t, i18n } = useTranslation();


    let handleLang = () => {
        i18n.language === 'en' ? i18n.changeLanguage('ar') : i18n.changeLanguage('en')
    }
    return (
        <Navbar expand="md" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink className='m-3 nav-link' to="/">Home</NavLink>
                        <NavLink className='m-3 nav-link' to="/about">About</NavLink>
                        <NavLink className='m-3 nav-link' to="/contact">Contact</NavLink>
                        <Button variant='primary' onClick={handleLang}>{i18n.language === 'en' ? 'عربى' : 'English'}</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SiteNav;