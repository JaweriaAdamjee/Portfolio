import React from 'react'
import "../style-components/Project.css"


const Projects = () => {
  return (
  <>
  <div id='projects' className="project-container">
    <div className="project-content">
      <h1 data-aos="fade-up"
     data-aos-duration="3000">Projects</h1>
      <div className="project-whole"  >
      {arr.map(function(elem){
        return(
          <>
          <Projectlist  title = {elem.title} img = {elem.img}/>
          </>
        )
      })}
      </div>
    </div>
    </div>

  </>
  )
}

export default Projects
function Projectlist(props){
  return(
    <>
   <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  className="project-single">
   <div className="project-left" >
      <h2>{props.title}</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aut aliquid, dolorum blanditiis repellat accusamus.</p>
    </div>
    <div className="project-right">
      <img src={props.img} alt="" />
    </div>
   </div>
    </>
  )
}
let arr= [
  {
    title : "courses Website using Html,Css, ",
    img: "/images/courses.gif"
  },
  {
    title : "cake Website Using Html, Css, Bootstrap",
    img: "/images/cake.gif"
  },
  {
    title : "E-Learning Website using Reactjs , Bootstrap, Css",
    img: "/images/e-learning.gif"
  },
]