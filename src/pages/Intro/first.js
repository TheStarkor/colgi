import { useState } from 'react';
import { Input, Image } from 'antd';
import LinkButton from "../../components/LinkButton";
import InfoHeader from '../../components/InfoHeader';

const { Search } = Input;

const IntroFirst = () => {
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
        title={"1. Text-to-Image"}
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

      <LinkButton link={"/intro/2"} />
    </>
  )
}

export default IntroFirst;