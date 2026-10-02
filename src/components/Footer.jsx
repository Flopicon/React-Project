import React from 'react'
import {
  FacebookFilled,
  LinkedinFilled,
  InstagramFilled,
  XOutlined,
} from '@ant-design/icons'

const Footer = () => {
  // Footer main container style (Light Pink background)
  const myStyle = {
    backgroundColor: '#fce7f3', // Light pink background
    padding: '40px 60px',
    marginTop: 'auto',
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '24px',
    flexWrap: 'wrap',
  }

  // Individual card style (Coral Pink block)
  const cardStyle = {
    backgroundColor: '#e57373', // Coral/rose block color
    borderRadius: '4px',
    padding: '24px',
    flex: '1 1 280px',
    minHeight: '130px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  }

  const titleStyle = {
    color: '#000000',
    fontSize: '16px',
    fontWeight: '700',
    marginBottom: '12px',
  }

  const textStyle = {
    color: '#000000',
    fontSize: '14px',
    margin: 0,
  }

  const socialIconsStyle = {
    display: 'flex',
    gap: '12px',
    marginTop: '8px',
    fontSize: '24px',
  }

  const iconFbStyle = {
    color: '#1877f2',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
  }

  const iconLinkedInStyle = {
    color: '#0a66c2',
    backgroundColor: '#ffffff',
    borderRadius: '4px',
  }

  const iconIgStyle = {
    color: '#e4405f',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
  }

  const iconXStyle = {
    color: '#000000',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    padding: '2px',
  }

  return (
    <footer style={myStyle}>
      <div style={containerStyle}>
        {/* Card 1: About Prettier */}
        <div style={cardStyle}>
          <div style={titleStyle}>About Prettier</div>
          <p style={textStyle}>Description</p>
        </div>

        {/* Card 2: Links */}
        <div style={cardStyle}>
          <div style={titleStyle}>Links</div>
          <p style={textStyle}>Description</p>
        </div>

        {/* Card 3: Our Contacts */}
        <div style={cardStyle}>
          <div style={titleStyle}>Our Contacts</div>
          <div style={socialIconsStyle}>
            <FacebookFilled style={iconFbStyle} />
            <LinkedinFilled style={iconLinkedInStyle} />
            <InstagramFilled style={iconIgStyle} />
            <XOutlined style={iconXStyle} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer