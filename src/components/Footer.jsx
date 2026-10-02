import React from 'react'
import {
  FacebookFilled,
  LinkedinFilled,
  InstagramFilled,
  XOutlined,
} from '@ant-design/icons'

const Footer = () => {
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
    alignItems: 'flex-start',
    gap: '24px',
    flexWrap: 'wrap',
  }

  const columnStyle = {
    flex: '1 1 280px',
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
        <div style={columnStyle}>
          <div style={titleStyle}>About Prettier</div>
          <p style={textStyle}>We are a modern creative agency dedicated to crafting seamless web experiences, elegant designs, and clean, readable code that makes your digital presence stand out.</p>
        </div>

        <div style={columnStyle}>
          <div style={titleStyle}>Links</div>
          <p style={textStyle}>Description</p>
        </div>

        <div style={columnStyle}>
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