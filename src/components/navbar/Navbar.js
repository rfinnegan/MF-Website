import { slide as Menu } from 'react-burger-menu'
import './navbar.css'


const Navbar = () => {
  const padding = {
    padding: 15
  }

  return (
    <div id="menu-container" class='menu-container'>
      <div class="menu-content desktop-only">
        <a style={padding} href="/home">Home</a>
        <a style={padding} href="/contact">Contact</a>
      </div>
      <div class="mobile-only">
        <Menu pageWrapId={"app-content"} outerContainerId={"app-content"} right>
          <a className="menu-item" href="/home">Home</a>
          <a className="menu-item" href="/contact">Contact</a>
        </Menu>
      </div>
    </div>
  )
}

export default Navbar