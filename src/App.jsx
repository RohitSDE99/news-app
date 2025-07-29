import React, { useState } from 'react'
import './index.css'
import News from './Components/News'
import OptionPanel from './Components/OptionPanel'
import Containers from './Components/Containers'

const App = () => {
  const [searchContent, setsearchContent] = useState('')
    return (
        <div className="newsContainer">
            <News searchContent={searchContent} setsearchContent={setsearchContent}></News>
            <OptionPanel setsearchContent={setsearchContent}></OptionPanel>
            <Containers searchContent={searchContent}></Containers>
        </div>
    )
}
export default App