import InfoHeader from "../../components/InfoHeader"
import LinkButton from "../../components/LinkButton"

const Task = () => {
  return (
    <>
      <InfoHeader
        title={"Make Your Own Image"}
        sub_title={"It's showtime!"}
      />

      <LinkButton 
        link={"/task/1"}
        title={"I understand it. Let's start!"}
      />
    </>
  )
}

export default Task;