import React,{useState,useEffect} from 'react'
import { Container,Row, Col,Table } from "reactstrap";
import CircleIcon from '../../assets/circle-icon.png'
import "../../styles/PageOne.css"
function PageOne() {

const content={
    texts:[
        {
        text:"The client agrees to pay the fees listed in the table above to the service provider, Djikéfactor."
       
    },
     {
         text:"Payment of the sum due is to be made in local currency, by direct debit, bank transfer or via a direct transfer Djikéfactor for the purchase of goods, transportation as well as customs clearance, and service fees"
     },
     {
         text:"The payment must be completed within 90 days (sixty) days from the delivery date."
     } ,
     {
         text:"Deposit : 25% of the final invoice."
     },
      {
         text:"The client recognises and understands the conditions indicated below and on the reverse of this contract(Djikéfactor clauses)."
     },
      ],
}

const points={
    texts:[
        {
        text:"Hereafter Referred To As The Client,"
       
    },
    {
        text:"And The Company Djike Factor Sa",
    },
    {
        text:"Hereafter Referred To As The Service Provider"
    }
]
}

const articals={
    textOFArticles:[
        {   header:"",
            topHeader:"GENERAL CONDITIONS",
            artical:"ARTICLE 1",
            colOne:"This contract concerns the purchase, transportation and customs clearance of goods by DJIKE FACTOR, hereinafter referred to as “the Service Provider”.",
            colTwo:"In exchange for the services defined in article 1 above, the client will pay the service provider the sum of … GMD representing the final invoice.",
            colThree:"25% of the final invoice.",
            colfour:"75% of the final invoice ninety (90) days upon receipt of the goods, ie 25% to be paid every 30 days.The sums provided for the above service will be paid by for by direct debit or bank transfer.",

       
    },
       {  header:"Choice of goods/ordering/support",
          artical:"ARTICLE 2",
          colOne:"1. The client freely chooses his merchandise and his supplier, and submits a pro-forma invoice to Djiké Factorfor further analysis. Once validated by Djikéfactor, the client is to pay 25% of the final invoice amount upfront.",
          colTwo:"2. Once the goods are made available, the client is required to acknowledge the conformity of his order andsign the delivery note. From this date, full payment will be made within 90 days of the delivery date.",
        
    },
      
      {  header:"service",
          artical:"ARTICLE 3",
          colOne:"The service provider will carry out the tasks outlined and specified in article 1, in accordance with the rules andregulations as prescribed by Djiké Factor.",
          colTwo:"",
         
    },
      {  header:"Client responsibilities",
          artical:"ARTICLE 4",
          colOne:"The client will ensure proper and thorough communication of all information necessary to complete the abovetasks to the service provider.",
          colTwo:"He must provide all the documents necessary for the creation of his account and agrees to pay 25% of the finalinvoice upfront, to allow the service provider to commence the operation.",
        
    },
      {  header:"Service provider responsibilitiess",
          artical:"ARTICLE 5",
          colOne:"Djiké Factor agrees to settle the total invoice amount with the client’s supplier within the 72 hours that follow theinsurance company’s acceptance of the account.",
          colTwo:"Djiké Factor agrees to make payment of the invoice in the foreign currency required, on behalf of the client andagrees to handle the importation (acquisition), transportation and customs clearance of the goods until theirconfirmed delivery.",
    },
      {  
         topHeader:"GENERAL CONDITIONS", 
        header:"Penalties/Interest on late payment",
          artical:"ARTICLE 6",
          colOne:"Any default in payment for the prescribed services will result in the collection of late payment interestdepending on the length of the delay.",
          colTwo:"Djiké Factor informs its insurance company of any delay according to the defined contractual conditions.In the event of a prolonged delay, Djiké Factor will be obliged to initiate recovery and commence legalproceedings.",
          colThree:"",
    },
      {  header:"Confidentiality agreement",
          artical:"ARTICLE 7",
          colOne:"he service provider will consider as strictly confidential, and refrain from divulging, any information, document,data or concept, which may arise throughout the duration of this contract.The the service provider is responsible for his employees as well as for himself.",
          colTwo:"The service provider, however, cannot be held responsible for any disclosure of information if the itemsdisclosed were in the public domain at the date of disclosure, or if they were already aware of them prior to thedate of signing of this contract, or if he obtained them from third parties by legitimate means.",
    },  

      ],
}
const headers=['Banjul','GOODS ACQUISITION CONTRACT','Between the following parties','Contract Duration','VAT: 15%','Final invoice amount, to be paid in GMD, not including taxes','For Djike Factor','For Client','Stamp And Signature Preceeded By The Words« Read And Approved »','The Client','The Service Provider','Djiké Factor SA']
 
const [tableText,setTableText]=useState(false)
const [classess,setClass]=useState('tabel-text')
const  cheksize=()=>{
      if(window.innerWidth<=950){
         setTableText(true)
         setClass('tabel-text responsive-table-text')
      }
     
  } 

  useEffect(()=>{
        cheksize()
       window.addEventListener('resize',cheksize)
    },[])


    return (
        <>
        <Container className="my-5">
       
            <Row  className=" py-5">
                 <Col xm='6' xl="2" >
                </Col>
                 <Col xm='0' xl="2">
                </Col>
                 <Col xm='0' xl="1">
                </Col>
                 <Col xm='0' xl="1">
                </Col>
                 <Col xm='0' xl="1">
                </Col>
                <Col xm='6' md='7' xl="5">
                <h1 className="page-one-text-color px-5">{headers[0]} <span className="px-2 text-dark">............................</span></h1>
                </Col>
            </Row>
        </Container> 
        <Container>
           <Row>
           <h2 className="page-one-text-color my-5">{headers[1]}</h2>
           </Row>
           <Row>
               <h3>{headers[2]}</h3>
           </Row>
           <div className="client-detailes my-3">
               <div className="p-4">
                   <Row>
                      <Col xs="12" xl="4"><div className='px-2'></div><div  className="bg-light p-3 my-2"><h4>Name</h4></div></Col>
                        <Col xs="12" xl="8" className="bg-light p-3 px-2 my-2"><h4>Adress</h4></Col>
                   </Row>
                   <Row>
                       <Col xl="12"  className="bg-light p-3 px-2 my-2">
                          <h4>Client Number</h4>
                       </Col>
                   </Row>
                   <Row>
                       <Col xl="12"  className="bg-light p-3 px-2 my-2">
                          <h4>Register Of Chamber Of Commerce And Trade Number</h4>
                       </Col>
                   </Row>
                   <Row>
                       <Col xl="12"  className="presented-col bg-light p-3 px-2 my-2">
                          <h4>Represented By</h4>
                       </Col>
                   </Row>
               </div>    
           </div>

           <Row >
                  {
                      points.texts.map((text,key)=>{
                          return(
               <Col lg='4'><img className="circle-icon" src={CircleIcon} alt="circle" /><span className="contract-text">{text.text}</span></Col>
                          )
                      }
                      )
                    }
           </Row> 
           <div className="py-5 my-2">
               <Row>
                   <Col xs='12' xl='6' className="py-6"><h4>It has been decided and agreed the following:</h4></Col>
                   <Col xs='12' xl='6' className="py-6"></Col>
               </Row>
               <Row>
                   <Col className="py-6"><h4>
                   The client entrusts the service provider with the purchase, transportation and customs clearance of the
                   following goods, under the conditions listed below, and in accordance with the General Conditions listed below:</h4></Col>
               </Row>
           </div>
           <div>
              <Table bordered={true}>
               
                <tbody>
                     <tr>
                        <td><h4 className={classess}>goods</h4></td>
                          <td><h4 className={classess}>Price(before tax)</h4></td> 
                             <td><h4 className={classess}>VAT</h4></td> 
                                <td><h4 className={classess}>Price(including tax)</h4></td> 
                                   <td><h4 className={classess}>Supplier</h4></td> 
                    </tr>
                    
                    
                    <tr>
                        <td><h4 className={classess}>content</h4></td>
                         <td></td>
                          <td></td>
                           <td ></td>
                            <td rowSpan="2"></td>

                    </tr>
                    <tr>
                        <td><h4 className={classess}>TOTAL</h4></td>
                        <td></td>
                           <td></td>
                            <td></td>
                    
                    </tr>
                  
                </tbody>
              </Table>
             <Row >
               <Col lg='6'><img className="circle-icon circle-image-b-table" src={CircleIcon} alt="circle" /><span className="contract-text">{headers[3]}</span></Col>
               
                 <Col lg='6'><span className="contract-text vat">{headers[4]}</span></Col>
           </Row>
           </div>
           <div className="my-5 py-2">
                <Row>
                    <Col>
                        <h4>{headers[5]}</h4>
                    </Col>
                </Row>
           </div>
           <div>
                 <Table bordered={true}>
               
                <tbody>
                     <tr>
                    <td></td>
                        <td><h4 className={classess}>Number of days</h4></td>
                          <td><h4 className={classess}>Amount (notincluding taxes)</h4></td> 
                             <td><h4 className={classess}>VAT</h4></td> 
                                <td><h4 className={classess}>Amount (includingall taxes)</h4></td> 
                                 
                    </tr>
                    
                    
                    <tr>
                        <td><h4 className={classess}>For the, Until the,Including the</h4></td>
                        <td><h4 className={classess}>90</h4></td>
                        <td><h4 className={classess}>GMD</h4></td>
                        <td><h4 className={classess}>G GMD</h4></td>
                        <td><h4 className={classess}>GMD</h4></td>

                    </tr>
                  
                  
                </tbody>
            </Table>
           </div>
           <div className="spance-div"></div>
           <Row>
               {
                      content.texts.map((text,key)=>{
                          return(
                              <div key={key}>
               <Col lg="12" className="my-3">
                    <h4>{text.text}</h4>
               </Col>
               </div>
                          )
                      }
                      )
                    }
           </Row>
           <Row className="my-4">
               <Col lg="6" className="my-3">
               <div className="px-2">
                   <Row>
                       <Col lg='12'>
                            <h4>{headers[6]}</h4>    
                       </Col>
                       <Col lg='12'>
                           <div className="bg-light px-2 presented-col"></div>
                       </Col>
                   </Row>
               </div>
               </Col>
               <Col lg="6" className="my-3">
                <div className="px-2">
                     <Row>
                       <Col lg='12'>
                            <h4>{headers[7]}</h4>    
                       </Col>
                       <Col lg='12'>
                           <div className="bg-light px-2 presented-col"></div>
                       </Col>
                        <Col lg='12' className="my-4">
                           <h5>{headers[8]}</h5>
                       </Col>
                   </Row>
                </div>
               </Col>
           </Row>



                     {
                      articals.textOFArticles.map((text,key)=>{
                          if(text.artical==="ARTICLE 1"||text.artical==="ARTICLE 6"){
                          return(
               <Row className='my-5' key={key}>
                   <div className="spance-div"></div>
               <Col lg='12'><h3 className="page-one-text-color">{text.topHeader}</h3></Col>
               <Col lg="12"><h5 className="page-one-text-color">{text.artical}</h5></Col>
               <Col lg='12'><h5 className="page-one-text-color">{text.header}</h5></Col>
               <Col lg='12'>
                 <h4>
                   <Col lg='12'>{text.colOne}</Col>
                   <Col lg='12'>{text.colTwo}</Col>
                   <Col lg='12'>{text.colThree}</Col>
                   <Col lg='12'>{text.colfour}</Col>
                 </h4>
               </Col>
           </Row>

                          )}

              else{
                  return(
                       
                      <Row className='my-5' key="key">
                          
              <Col lg='12'><h5 className="page-one-text-color">{text.artical}</h5></Col>
              <Col lg="12"><h5>{text.header}</h5></Col>
               <h4>
                   <Col lg='12'>{text.colOne}</Col>
                   <Col lg='12'>{text.colTwo}</Col>
                   <Col lg='12'>{text.colThree}</Col>
                   <Col lg='12'>{text.colfour}</Col>
                 </h4>     
           </Row>
                  )
              }            
                      }
                      )
                    }

           
            <Row className="my-4">
               <Col lg="6" className="my-3">
               <div className="px-2">
                   <Row>
                       <Col lg='12'>
                            <h4>{headers[9]}</h4>    
                       </Col>
                       <Col lg='12'>
                           <div className="bg-light px-2 presented-col"></div>
                       </Col>
                   </Row>
               </div>
               </Col>
               <Col lg="6" className="my-3">
                <div className="px-2">
                     <Row>
                       <Col lg='12'>
                            <h4>{headers[10]}</h4>    
                       </Col>
                       <Col lg='12'>
                           <div className="bg-light px-2 presented-col"></div>
                       </Col>
                        <Col lg='12' className="page-one-text-color  my-5 py-5 " >
                           <h1 className="vat">{headers[11]}</h1>
                       </Col>
                   </Row>
                </div>
               </Col>
           </Row>
            <div className="spance-div"></div>
        </Container>  
      </>
    )
}

export default PageOne
