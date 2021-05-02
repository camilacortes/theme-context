import React from 'react'
import themeContext from '../themeContext'

function Footer (props){
    return (
      <themeContext.Consumer>
        {theme=> (
          <div className="footer" backgroundColor={theme}>
            {theme === 'light' ? 'light' : 'dark'} Footsy Footer
          </div>
        )}
      
      </themeContext.Consumer>
    )
}

export default Footer
