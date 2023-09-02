import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'
// Write your code here
const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const textClass = isDarkTheme ? 'dark-theme-text' : 'light-theme-text'
      const imageClass = isDarkTheme ? 'dark-background' : 'light-background'
      const notFoundContainer = isDarkTheme
        ? 'dark-background'
        : 'light-background'
      return (
        <>
          <Navbar />
          <div className={notFoundContainer}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className={`${imageClass} not-found-image`}
            />
            <h1 className={textClass}>Lost Your Way?</h1>
            <p className={textClass}>
              We cannot seem to find the page you are looking for
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
