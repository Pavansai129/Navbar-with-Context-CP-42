import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'
// Write your code here
const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const textClass = isDarkTheme ? 'dark-theme-text' : 'light-theme-text'
      const backgroundContainer = isDarkTheme
        ? 'dark-background'
        : 'light-background'
      return (
        <>
          <Navbar />
          <div className={backgroundContainer}>
            <img src={homeImageUrl} alt="home" />
            <h1 className={textClass}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
