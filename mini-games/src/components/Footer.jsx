import React from 'react';

const style = {
  borderTop: '1px solid #E7E7E7',
  textAlign: 'right',
  padding: '15px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  height: '60px',
  width: '100%',
}

function Footer ({ text }) {
  return (
    <footer className='bg-light' style={style}>
      &copy; {text}
    </footer>
  )
}

export default Footer
