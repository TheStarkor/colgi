import InfoHeader from "../../components/InfoHeader"
import LinkButton from "../../components/LinkButton"

const CompletePage = () => {
  return (
    <>
      <InfoHeader
        title={"Well Done!"}
        sub_title={"Thank you for your participation. We want to hear your personal experiences."}
      />

      <LinkButton 
        link={"/finish"}
        title={"Submit and Finish"}
      />
    </>
  )
}

export default CompletePage