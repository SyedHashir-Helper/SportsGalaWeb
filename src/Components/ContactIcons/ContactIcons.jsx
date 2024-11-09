import React, {useState} from 'react'
import {Col} from 'antd'
const ContactIcons = ({element}) => {
    // const [hovering, setHovering] = useState(false)
  return (
    <Col 
        // onMouseEnter={()=>setHovering(true)}
        // onMouseLeave={()=>setHovering(false)}
    key={element.link} className="icon-con" md={8} xs={8}>
        <a href={element.link}>{element.icon}</a>
    </Col>
  )
}
// className="icon-con"
export default ContactIcons
