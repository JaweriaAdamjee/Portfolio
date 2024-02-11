import React from 'react'
import '../style-components/Skill.css'
let arr =[
  {img: "/images/nodejs.jpg"},
  {img: "/images/reactjs.jpg"},
  {img: "/images/javascript.jpg"},
  {img: "/images/bootstrap.jpg"},
{img: "/images/css.jpg"},
{img: "/images/html.jpg"},

]
function Skillname(props){
  return(
    <>
    <img  data-aos="fade-right" data-aos-duration="1000" src={props.img} alt="" />
   
    </>
  )
}
const Skill = () => {
  return (
    <div id='skills' className='skill-container'>
      <div className="skill-content">
        <h1 data-aos="fade-down" data-aos-duration="500">Skills</h1>
        <div className="image">
        {arr.map(function(elem){
          return(
            <>
           <Skillname img ={elem.img}/>
            </>
          )
        })}
        </div>
      </div>
    </div>
  )
}




export default Skill

