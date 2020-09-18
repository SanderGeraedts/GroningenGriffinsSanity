import React from 'react'
import Header from './header'

const Layout = ({ children, teamInfo, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div>{children}</div>
    <footer>
      <div>
        <div>
          {teamInfo && (
            <div>
              {teamInfo.name}
              <br />
              {teamInfo.location.lat}
              {teamInfo.location.lng}
            </div>
          )}
        </div>

        <div>
          © {new Date().getFullYear()}, Built with <a href="https://www.sanity.io">Sanity</a> &amp;
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer>
  </>
)

export default Layout
