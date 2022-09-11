import { useEffect } from "react"
import InfoHeader from "../../components/InfoHeader"

const FinishPage = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.replace('https://google.com');
    }, 2000);
  }, [])

  return (
    <>
      <InfoHeader
        title={"Thank you very much!"}
        sub_title={"You will soon be redirected to the prolific result page."}
      />

      <h3>
        If you don't see the result page. Please capture this page and send me a message with your ID.
      </h3>
    </>
  )
}

export default FinishPage