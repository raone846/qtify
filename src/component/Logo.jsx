import React from 'react';

function Logo() {
  return (
    <div>
      <img 
        src={require("../assets/logo.png")} 
        alt= "logo" 
        style={{
          width: '67px', 
          height: '34px', 
        }} 
      />
    </div>
  );
}

export default Logo;
