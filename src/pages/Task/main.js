import { useState } from 'react';
import { Input, Image } from 'antd';
import Sketch from "react-p5"; 

import LinkButton from "../../components/LinkButton";
import InfoHeader from '../../components/InfoHeader';

const { Search } = Input;

const MainTask = () => {
  const [isLoading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);

  const onSearch = (value) => {
    setLoading(true);
    setTimeout(() => {
      setImgUrl("https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg/1200px-ThreeTimeAKCGoldWinnerPembrookeWelshCorgi.jpg");
      setLoading(false);
    }, 3000);
  }

	let x = 50;
	let y = 50;
  /*mask 에 사용되는 함수*/

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(512, 512).parent(canvasParentRef)
  };

	const draw = (p5) => {
		p5.background(0);
		p5.ellipse(x, y, 70, 70);
		x++;
	};

  return (
    <>
      <InfoHeader
        title={"Task #1. ....."}
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

      <Sketch setup={setup} draw={draw} /> 

      <LinkButton link={"/complete"} title={"Finish!"}/>
    </>
  )
}

export default MainTask;