import React from 'react';

const outer = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

const inner = {
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
    <footer style={outer}>
      <div className='bg-light' style={inner}>
        &copy; {text}
      </div>
    </footer>
  )
}

export default Footer
