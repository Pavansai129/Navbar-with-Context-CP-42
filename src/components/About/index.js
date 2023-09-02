import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'
// Write your code here
const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const textClass = isDarkTheme ? 'dark-theme-text' : 'light-theme-text'
      const backgroundContainer = isDarkTheme
        ? 'dark-background'
        : 'light-background'
      return (
        <>
          <Navbar />
          <div className={backgroundContainer}>
            <img src={aboutImageUrl} alt="about" />
            <h1 className={textClass}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
