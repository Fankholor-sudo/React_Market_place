import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header({pageUrl, title }) {
    return (
        <div>
            <header>
                <Row className="d-flex">
                    <div className="d-flex align-items-center" >
                        <Image src='./img/trans_logo.png' style={{ marginLeft: '50px', marginTop: '5px', width: '50px' }} />
                    </div>
                    <p style={{ marginLeft: '3%', marginTop: '30px', fontSize: '16px' }}>
                        We have everything that you need and like. Clothing | Technology | Books | Accessories | Sports | Stationary</p>
                    <p style={{ marginLeft: '15%', marginTop: '30px' }}>
                        <Link to = {pageUrl}>{title}</Link>
                    </p>
                </Row>
            </header>
        </div>
    );
}

export default Header
