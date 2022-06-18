import * as React from 'react'

interface IPageLayout {
  children: React.ReactNode
}

const PageLayout: React.FC<IPageLayout> = ({ children }) => {
  return <div>{children}</div>
}

export default PageLayout
