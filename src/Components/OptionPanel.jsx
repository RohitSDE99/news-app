import './OptionPanel.css'
import Options from './Options.jsx'

const OptionPanel = ({ setsearchContent }) => {
  return (
    <div className='OptionPanel'>
      <Options category="Technology" setsearchContent={setsearchContent} />
      <Options category="Space" setsearchContent={setsearchContent} />
      <Options category="Sports" setsearchContent={setsearchContent} />
      <Options category="Politics" setsearchContent={setsearchContent} />
      <Options category="Science" setsearchContent={setsearchContent} />
      <Options category="Business" setsearchContent={setsearchContent} />
      <Options category="Finance" setsearchContent={setsearchContent} />
    </div>
  )
}

export default OptionPanel