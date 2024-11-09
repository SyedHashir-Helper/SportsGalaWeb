import React from 'react'
import {Row, Col} from 'antd'

const Latest = ({title, description, status}) => {
  return (
   <Row className="project-box" style={{ margin: "1.5% 0%"}}>
    <Col md={16} xs={24}>
        <div className="project-box-title">{title}</div>
        <div className="project-box-describe">{description}</div>
    </Col>
    <Col md={8} xs={24} className="project-box-developed">
        {status}
    </Col>
   </Row>
  )
}

export default Latest
