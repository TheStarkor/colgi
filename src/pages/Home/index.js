import { useState } from "react";
import About from "./About";
import Info from "./Info";

const Home = () => {
  const [isAbout, setIsAbout] = useState(true);

  const checkAbout = () => {
    setIsAbout(false);
  }

  return (
    <>
      {isAbout ? <About checkAbout={checkAbout}/> : <Info />}
    </>
  )
}

export default Home;