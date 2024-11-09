import React from 'react'
import styled from 'styled-components';
import "../../styles/about.css";

const Project = (props) => {
    const item = props.item;
  return (
    <div className="choose-us-item">
        <span className="choose-us-icon">
            <i className={item.icon}></i>
        </span>
        <div className='border-project'>
            <span className='project-title'>
                <h4 className="choose-us-title">{item.title}</h4>
                <h4 className="describe">{item.describe}</h4>
            </span>
            <div className='project-details'>
                <div style={{width: "100%"}}>
                    <div  className="project-description">{
                        item.desc}
                    </div>
                    <div className='stack-skills'>
                        <div>
                            Developed in MERN Stakc
                        </div>
                        <div className='key-skills'>
                            Key Skills Learned: {item.keySkills}
                        </div>

                    </div>
                </div>
                <div className="portfolio-links">
                    <span>
                    <i class="ri-github-fill"> <a href={item.github}></a></i>
                    </span>
                    <span>
                    <i class="ri-global-line"><a href={item.other}></a></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project;