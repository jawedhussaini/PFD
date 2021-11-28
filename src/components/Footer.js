import React from 'react'
import {Row, Col } from "reactstrap";
import '../styles/footer.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <>
         
          <Row className="footer-row">
              <Col>
                <div class="footer">
                   <div className="i"> </div>
                   <div className="j"></div>
                   <div className="k"></div>
                   <div className="l mx-4">
                      <span className="responsive-text">1 Jimpex Road, Kanifing, Banjul, Gambia</span><br/>
                      <span className="responsive-text"><span className="p-2"><BsFillTelephoneFill color="#1ECD9C" fontSize="100%"/>+220 331 4053</span><span> <MdEmail color="#1ECD9C" fontSize="100%"/>gambia@djfactor.com</span></span>
                   </div>
                 </div>
              </Col>
          </Row>   
        </>
    )
}

export default Footer
