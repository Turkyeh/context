// import React from 'react'
// import Two from './Two';

// const one = (props) => {
//     return (
//         <div>
//             <h>Hi from one</h>
//             <Two theme={props.theme} />
//         </div>
//     );
// }

// export default one;

// countaxt 
import React from 'react';
import ToggleThemeBtn from './ToggleThemeBtn';
import Two from './Two';

function One() {
  return (
    <div>
        <h1>Hi from One.</h1>

        <Two />

      <ToggleThemeBtn />
      {/* countext */}
    </div>
  );
}

export default One;