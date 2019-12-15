import React from "react"
import Header from "./siteHeader"

const SiteLayout = ({ children, location }) => (
  <div>
    <Header location={location} />
    <div>
      {children}
    </div>
  </div>
)


export default SiteLayout