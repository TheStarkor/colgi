import InfoHeader from "../../components/InfoHeader"
import LinkButton from "../../components/LinkButton"

const Intro = () => {
  return (
    <>
      <InfoHeader
        title={"Image Generation Model"}
        sub_title={"We ....."}
      />

      <LinkButton 
        link={"/intro/1"}
        title={"I understand it. Let's start!"}
      />
    </>
  )
}

export default Intro