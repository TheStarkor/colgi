import { useState } from 'react';
import { Input, Image, Button, Row, Col } from 'antd';
import { ReactSketchCanvas } from 'react-sketch-canvas';

import LinkButton from "../../components/LinkButton";
import InfoHeader from '../../components/InfoHeader';
import ImageScoring from '../../components/ImageScoring';
import PreviousImages from '../../components/PrevieousImages';

const { Search } = Input;

const styles = {
  border: '0.0625rem solid #9c9c9c',
  borderRadius: '0.25rem',
  width: '400px',
  height: '400px'
};

const MainTask = () => {
  const [isLoading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);
  const [count, setCount] = useState(0);
  const [isHome, setHome] = useState(true);

  const onSearch = (value) => {
    setLoading(true);
    setTimeout(() => {
      setImgUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg");
      setLoading(false);
      setHome(false);
      setCount(count + 1);
    }, 1000);
  }

  let x = 50;
  let y = 50;
  /*mask 에 사용되는 함수*/

  const startRetouch = () => {
    setHome(true);
  }

  return (
    <>
      <InfoHeader
        title={`Task #1. ${isHome ? "Home" : "Scoring"} .....`}
        sub_title={"..."}
      />

      {`Count: ${count} (minimum 5)`}

      <Search
        placeholder="an cute colgi"
        allowClear
        enterButton="Dream"
        size="large"
        onSearch={onSearch}
        loading={isLoading}
      />


      {isHome &&
        <>
          <Row>
            <Col span={12}>
              
              <ReactSketchCanvas
                style={styles}
                width="400"
                height="400"
                strokeWidth={40}
                strokeColor="black"
              />

            </Col>

            <Col span={12}>
              <PreviousImages
                title="COLGI"
                image_urls={[
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg"
                ]}
              />
              <br/>
              <PreviousImages
                title="a cute colgi"
                image_urls={[
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg"
                ]}
              />
              <br/>
              <PreviousImages
                title="amazing cute colgi"
                image_urls={[
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg"
                ]}
              />

            </Col>
          </Row>
        </>
      }


      {!isHome &&
        <>
          <ImageScoring
            id="image-1"
            image_url="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg"
          />
          <br />
          <ImageScoring
            id="image-2"
            image_url="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg"
          />
          <br />
          <ImageScoring
            id="image-3"
            image_url="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg"
          />
          <br />
          <ImageScoring
            id="image-4"
            image_url="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg"
          />
        </>
      }

      {!isHome && 
        <>
          <div className='button-group'>
            <Button onClick={startRetouch} type="primary">Again</Button>
          </div>
    
          <LinkButton link={"/complete"} title={"Finish!"} />
        </>
      }
    </>
  )
}

export default MainTask;