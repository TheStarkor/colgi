const InfoHeader = (props) => {
  return (
    <>
      <div className='text-box'>
        <h1>{props.title}</h1>
        <h2 style={{ fontWeight: "normal" }}>{props.sub_title}</h2>
      </div>
      <br />
    </>
  )
}

export default InfoHeader