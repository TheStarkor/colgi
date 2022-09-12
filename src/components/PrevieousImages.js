import { Image, Row, Col } from 'antd'

const PreviousImages = (props) => {
  return (
    <>
      {props.title}
      <Row>
        {props.image_urls.map(image_url => (
          <Col span={6}>
            <Image 
              height={120}
              src={image_url}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default PreviousImages;