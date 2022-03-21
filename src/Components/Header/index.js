import { NavLink } from 'react-router-dom';
import {Col, Container, Row } from 'reactstrap'
import './header.css';

function Header(){


    return(
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className="header__link header__title"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Easy Frontend
                        </a>
                    </Col>
                    <Col xs="auto">
                        {/* <NavLink
                            exact
                            className="header__link"
                            to='/photos'
                            activeClassName="header__link--active"
                        >
                            Redux Project
                        </NavLink> */}
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;