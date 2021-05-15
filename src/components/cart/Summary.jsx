import React from 'react';
import { Button, Row, Col, Card} from 'react-bootstrap';

function Summary() {
    return (
        <div>
            <Card className="card" style={{ boxShadow: '5px 0px 8px 6px rgba(0,0,0,0.08)',
                marginBottom: '15px', marginTop: '5px',
                marginLeft: '3%', marginRight: '3%', width: '310px'
            }}>
                <div className="card-body">
                    <h3>Summary</h3>
                    <br/>
                    <Col>
                        <div style={{ marginLeft: '-1rem',marginBottom:'10px' }}>
                            <h6 className="card-subtitle" >Number of Items: </h6><span>26</span>
                        </div>
                        <div style={{marginLeft: '-1rem'}}>
                            <h6 className="card-subtitle" >Address :</h6>
                            <span><p>Adress to ship the product to the user
                            have to provide one everytime the make an order,
                            and should always make sure that their address is correct.
                            Adress to ship the product to the user
                            have to provide one everytime the make an order,
                                and should always make sure that their address is correct.</p></span>
                        </div>
                        <br/><br/><br/>
                        <div>
                            <h5 style={{ marginTop: '-3rem', marginBottom: '1rem'}}>Total: <span>R100000.00</span></h5>
                            <Row>
                                <Button style={{ background: 'green', width: '110px', height:'50px'}} >
                                    Order
                                </Button>

                                <Button style={{ background: 'red', width: '110px', height:'50px', marginLeft: '1rem' }}>
                                    Discard
                                </Button>
                            </Row>
                        </div>
                    </Col>
                </div>
            </Card>
        </div>
    )
}

export default Summary;
