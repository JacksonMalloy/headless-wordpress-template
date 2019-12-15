import React from "react"
import SiteHeader from "./siteHeader"

const HomepageLayout = ({ pageNumber, location, children }) => (
  <div>
    <SiteHeader location={location} />
    {!pageNumber ? (
      <div>
       hi
      </div>
    ) : null}
    <div>
      {children}
    </div>
  </div>
)

export default HomepageLayout