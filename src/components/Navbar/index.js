import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'
// Write your code here
const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const navbarContainer = isDarkTheme
        ? 'dark-theme-navbar'
        : 'light-theme-navbar'
      const textClass = isDarkTheme ? 'dark-theme-text' : 'light-theme-text'
      const onCLickTheme = () => {
        toggleTheme()
      }

      return (
        <>
          <nav className={navbarContainer}>
            <div>
              <img src={websiteLogoUrl} alt="website logo" />
            </div>
            <ul>
              <li>
                <Link to="/" className={textClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={textClass}>
                  About
                </Link>
              </li>
            </ul>
            <div>
              <button type="button" data-testid="theme" onClick={onCLickTheme}>
                <img src={themeImageUrl} alt="theme" />
              </button>
            </div>
          </nav>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
