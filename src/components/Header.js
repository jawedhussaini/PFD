import React from 'react'
import "../styles/header.css"
import { Row, Col } from "reactstrap";
function Header() {
    return (
     <>
    
            <Row className="header-row">
                <Col xs="7" className="header-background">
                   <div className="a">
                  <div className="d"></div>
                  <div className="c"></div>
                  <div className="e"></div>
                  <div className="b"></div>
                  
                </div>
                </Col>
                <Col xs="3" className="heeader-text my-5 py-5">
                    <div className="px-5 my-3"><h2 className="resposive-headers">Contract number<span className="px-2">...................</span></h2></div>
                    <div className="px-5 my-3"><h2 className="resposive-headers">Client reference<span className="px-2">...................</span></h2></div>
                </Col>
                <Col xs="2" className="m-0 p-0"> 
                   <div className="h">
                      <div className="f"></div>
                      <div className="g"></div>
                   </div>
                </Col>
            </Row>
          
        </>
    )
}

export default Header
