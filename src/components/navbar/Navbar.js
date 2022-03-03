function  Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="header-name">
          <span></span>
          <h3>Exxmon</h3>
        </div>

        <div className="menu-wrapper">
          
          <div className="menu-list_wrapper">
            <h3>menu</h3>
            <nav className="menu-list">
              <ul>
                <li><span className="menu-icon"></span> home</li>
                <li><span className="menu-icon"></span> community</li>
                <li><span className="menu-icon"></span> discovery</li>
                <li><span className="menu-icon"></span> coming soon</li>
              </ul>
            </nav>

            <h3>social</h3>
            <nav className="social-list">
              <ul>
                <li><span className="menu-icon"></span> home</li>
                <li><span className="menu-icon"></span> community</li>
                <li><span className="menu-icon"></span> discovery</li>
                <li><span className="menu-icon"></span> coming soon</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Navbar