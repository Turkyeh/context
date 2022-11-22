import React from 'react';
// import { useContext } from 'react';

const ThemeContext = React.createContext({
    // const ThemeContext=createContext(بتقدري تمرري داتا هون )
    'theme': 'dark',
    toggleTheme: () => {}
});

export default ThemeContext;

// 
// بcompounant ستخدم context مشان امرر البيانات بين الل