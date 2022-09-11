import { Button } from "antd";
import InfoHeader from "../../components/InfoHeader";

const About = (props) => {
  return (
    <>
      <InfoHeader
        title={"COLGI"}
        sub_title={"Thank you for your participation. The survey is separated into three steps."}
      />

      <br />
      <div className='text-box'>
        <ol>
          <h2 style={{ fontWeight: "normal" }}><li className='text-body'>(Introduce) We explain what is the <b>Image Generation Model</b> and ways how to use it.</li></h2>
          <h2 style={{ fontWeight: "normal" }}><li className='text-body'>(Main Task) You do <b>two main tasks</b> that make your own image and score it.</li></h2>
          <h2 style={{ fontWeight: "normal" }}><li className='text-body'>(Final Review) You answer our questions.</li></h2>
        </ol>
      </div>

      <h3 style={{color:'red'}}>* You do not refresh this site until finish your research</h3>
      
      <div className='button-group'>
        <Button onClick={props.checkAbout} type="primary">Next</Button>
      </div>
    </>
  )
}

export default About