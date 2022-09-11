import { useState } from 'react';
import { Input, Image } from 'antd';
import LinkButton from "../../components/LinkButton";
import InfoHeader from '../../components/InfoHeader';

const { Search } = Input;

const IntroSecond = () => {
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
        title={"2. Text-to-Image with samples"}
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

      {imgUrl ?
        <Image 
          width={520}
          src={imgUrl}
        />
        : 
        <>
          <h2>Sample #1</h2>
          <h3>[object], isometric art, elegant, sophisticated, understated, pastel colors, artstation, 3D render, cgsociety, 8k uhd</h3>
          <Image src={"https://user-images.githubusercontent.com/45455072/189533100-a140966d-b32e-41e9-8573-c49d7a2b81bf.png"} width={520}/>


          <h2>Sample #2</h2>
          <h3>a dog eating a cake, isometric art, pop, sophisticated, vivid colors, jeff koons, artstation, 3D render, 8k uhd</h3>
          <Image src={"https://user-images.githubusercontent.com/45455072/189533254-269c629b-fcf9-4182-9c38-762e0ee41472.png"} width={520}/>
        </>
      }

      <LinkButton link={"/intro/3"} />
    </>
  )
}

export default IntroSecond;