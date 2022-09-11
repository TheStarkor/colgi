import LinkButton from "../../components/LinkButton"

const MainTask = () => {
  return (
    <>
      Main Task!!
      <LinkButton
        link={"/complete"}
        title={"Finish!"}
      />
    </>
  )
}

export default MainTask;