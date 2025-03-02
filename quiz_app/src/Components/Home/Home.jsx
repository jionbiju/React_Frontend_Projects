import React from 'react'
import './Home.css'

const Home = (props) => {
  return (
    <div className='container-home'>
      <div className="header-home">
      <h1>Welcome to the Quiz App</h1>
      <h2>Select a Topic to Begin</h2>
      </div>
      <div className="topic-selection">
        <div className="topic science" onClick={()=>{props.setTopic("Science")}}>SCIENCE</div>
        <div className="topic history" onClick={()=>{props.setTopic("History")}}>HISTORY</div>
        <div className="topic maths" onClick={()=>{props.setTopic("Maths")}}>MATHS</div>
        <div className="topic sports" onClick={()=>{props.setTopic("Sports")}}>SPORTS</div>
      </div>
    </div>
  )
}

export default Home
