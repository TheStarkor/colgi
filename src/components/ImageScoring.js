import { Image, Col, Row, Rate, Form } from 'antd';

const ImageScoring = (props) => {
  const names = [
    "Quality",
    "Composition",
    "Accuracy",
    "Satisfaction",
    "Authenticity",
    "Originality",
    "Likely"
  ]

  const onChange = (name, value) => {
    console.log(props.id, name, value * 2)
  }
  
  return (
    <>
      <Row align="middle">
        <Col span={6}>
          <Image 
            height={220}
            src={props.image_url}
          />
        </Col>
        <Col span={6}>
          {
            names.map(name => (
              <Row>
                <Col span={8} style={{marginTop: '8px'}}>{name}</Col>
                
                <Col>
                  <Rate allowHalf onChange={(e) => {onChange(name.toLowerCase(), e)}}/>
                </Col> 
              </Row>
            ))
          }
        </Col>
      </Row>
    </>
  )
}

export default ImageScoring