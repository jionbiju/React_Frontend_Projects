import React, { useState } from 'react'
import Quiz from './Components/Quiz/Quiz'
import Home from './Components/Home/Home'

const App = () => {
  const [topic,setTopic] = useState(null);
  return (
    <div>
      {topic?(<Quiz topic={topic} setTopic={setTopic}/>):
      (<Home setTopic={setTopic}/>)}
    </div>
  )
}

export default App
