import { useState } from 'react';
import { Input, Image } from 'antd';
import { ReactSketchCanvas } from 'react-sketch-canvas';

import LinkButton from "../../components/LinkButton";
import InfoHeader from '../../components/InfoHeader';

const { Search } = Input;

const styles = {
  border: '0.0625rem solid #9c9c9c',
  borderRadius: '0.25rem',
  width: '400px',
  height: '400px'
};

const IntroFourth = () => {
  const [isLoading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);

  const onSearch = (value) => {
    setLoading(true);
    setTimeout(() => {
      setImgUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg");
      setLoading(false);
    }, 3000);
  }

  return (
    <>
      <InfoHeader
        title={"4. Image Retouching"}
        sub_title={"..."}
      />

      <Search
        placeholder="an cute colgi"
        allowClear
        enterButton="Dream"
        size="large"
        onSearch={onSearch}
        loading={isLoading}
      />

      {imgUrl && 
        <Image 
          width={520}
          src={imgUrl}
        />
      }

      <ReactSketchCanvas
        style={styles}
        width="400"
        height="400"
        strokeWidth={40}
        strokeColor="black"
      />

      <LinkButton link={"/task"} title={"Finish!"}/>
    </>
  )
}

export default IntroFourth;