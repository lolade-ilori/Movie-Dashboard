import { RiMovie2Fill, RiHomeFill, RiCommunityLine, RiCompassLine, RiAlarmLine, RiUser3Line, RiUserHeartLine } from "react-icons/ri";
import { FiDisc } from "react-icons/fi"

function  Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="header-name">
          <span><RiMovie2Fill  style={{fontSize:'20px', marginTop:'10px'}}/></span>
          <h3>Exxmon<span style={{fontSize:'30px'}}>.</span></h3>
        </div>

        <div className="menu-wrapper">
          
          <div className="menu-list_wrapper">
            <h3>menu</h3>
            <nav className="menu-list">
              <ul>
                <li className="navbar-active"><span className="menu-icon"><RiHomeFill /></span> home</li>
                <li><span className="menu-icon"><RiCommunityLine /></span> community</li>
                <li><span className="menu-icon"><RiCompassLine /></span> discovery</li>
                <li><span className="menu-icon"><RiAlarmLine /></span> coming soon</li>
              </ul>
            </nav>

            <h3>social</h3>
            <nav className="menu-list">
              <ul>
                <li><span className="menu-icon"><RiUser3Line /></span> friends</li>
                <li><span className="menu-icon"><RiUserHeartLine /></span> parties</li>
                <li><span className="menu-icon"><FiDisc /></span> media</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Navbar