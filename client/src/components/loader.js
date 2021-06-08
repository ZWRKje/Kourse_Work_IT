import React from 'react'

export const Loader = () => {
    return (
        <div style ={{diaplay:'flex', justifyContent:'center', paddingTop:'2rem'}}>
        <div class="spinner-layer spinner-yellow">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
     </div>
    );
  };
  
