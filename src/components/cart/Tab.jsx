import React,{useState} from 'react'
import { Button, Row, Col, Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

function Tab({ name, price, desc, itemNo, img }) {
    const [numItem,setNumItem] = useState({value: 1})

    const increment = (e) =>{
        console.log(numItem.value)
        setNumItem({value: numItem.value + 1})
    }

    const decrement = (e) =>{
        console.log('called: ',numItem.value)
        if(numItem.value > 1){
            setNumItem({value: numItem.value - 1})
        }
    }
    return (
        <div>
            <Card className="card" style={{
                boxShadow: '5px 0px 8px 6px rgba(0,0,0,0.08)',
                marginRight: '2rem',
                marginBottom: '15px', marginTop: '5px', width: '51rem'
            }}>
                <div className="card-body" style={{margin: '-10px'}}>
                    <Row>
                        {/* './img/emptCartIcon.png' */}
                        <Image src={img} style={{ border: 'none', height: '100px', width: '100px', marginTop: '15px', marginLeft: '15px' }} />
                        <Col style={{marginLeft: '0px' }}>
                            <h4 className="card-title">{name}</h4>
                            <div style={{ width: '24rem', marginTop: '2%'}}>
                                <p className="card-text">{desc}</p>
                            </div>
                        </Col>

                        <Col >
                            <div >
                                <Row>
                                    <Col >
                                        <h6 style={{ marginTop: '3rem', marginLeft: '15px' }}>{numItem.value}</h6>
                                        <h6>Items</h6>
                                    </Col>

                                    <div style={{marginTop:'2rem'}}>
                                        <Row style={{ width: '5rem'}}>
                                        <Button style={{ background: 'white' }} onClick={(e)=>increment(e)} >
                                            <Image src='./img/increment.png' style={{ width: '15px' }}></Image>
                                        </Button>

                                        <Button style={{ background: 'white' }} onClick={(e)=>decrement(e)}>
                                            <Image src='./img/decrement.png' style={{ width: '15px' }}></Image>
                                        </Button>
                                    </Row>
                                    </div>
                                    
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <h4 style={{marginLeft: '20px'}}>R{price}</h4>
                            <Button 
                                style={{ background: '#06042E', width: '7rem', marginTop: '25px', marginLeft: '20px' }}>
                                Remove
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Card>
        </div>
    )
}

export default Tab;
