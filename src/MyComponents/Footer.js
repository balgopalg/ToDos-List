import React from 'react'

export const Footer = () => {
    let footerStyle={   
        width: "100%",
    }
  return (
    <footer className='bg-dark text-light' style={footerStyle}>
        <p className='text-center py-3'> Copyright &copy; mytodolist.com</p>
    </footer>
  )
}
