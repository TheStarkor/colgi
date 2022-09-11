import { Button } from "antd"
import { Link } from "react-router-dom"

const LinkButton = (props) => {
  return (
    <>
      <div className='button-group'>
        <Link to={props?.link} style={{ textDecoration: 'none'}}>
          <Button type="primary">{props?.title ? props.title : "next"}</Button>
        </Link>
      </div>
    </>
  )
}

export default LinkButton