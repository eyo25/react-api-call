import React from 'react'
import { Card ,Row ,Col} from "react-bootstrap";

const Home = ({loding ,leages}) => {
    return loding ? (<h1>Loding...</h1>)
:(<div>
    {leages.map( (leage)=>(
      <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 2 }).map((_, idx) => (
    <Col>
      <Card className='mb-2'>
  
        <Card.Body>
          <Card.Title>{leage.title}</Card.Title>
          <a href={leage.url}> <video src={leage.url.videos} width="320" height="240" controls>
          {leage.url}
          </video></a>
          
         
          ￼
Card title

          
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    )

    )}
  </div>)        
         
}

export default Home
