import React, { Component } from 'react'

interface LinkProps {
  active: boolean
  children: React.ReactChild
  onClick: () => void
}

class Link extends Component<LinkProps> {
  render() {
    const { active, children, onClick } = this.props

    return (
      <button onClick={onClick} disabled={active}>
        {children}
      </button>
    )
  }
}

export default Link
