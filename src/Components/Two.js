// import React from 'react'
// import One from './One'

// function two(props) {
//   return (
//     <div>
//           <h>Hi in two </h>
//           <one />
//     </div>
//   )
// }

// export default two;
import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

function Two(Props) {
  const themeContext = useContext(ThemeContext);

  console.log("Two Component " + themeContext.theme);

  return (
    <div>
      <h2 style={{color: themeContext.theme === 'dark' ? 'white' : 'blue'}}>Hi from Two.</h2>
      
      <p>theme: {themeContext.theme}</p>
    </div>
  );
}

export default Two;