import { createGlobalStyle, css } from "styled-components";
import normalize from "normalize.css";
const GlobalStyles = createGlobalStyle`
${normalize}
:root{
    // colors
    --color-primary:#facf0f;
    --color-secondary:#212529;
    --color-tertary:#555;
    
    //Typography
    font-size: 62.5%;
    font-family: 'Source Sans Pro', sans-serif;  
    
}
input{
    line-height:1;
}

*, *::after, *::before {
  box-sizing: border-box;
}

@media(max-width:56.25em ){
:root{
    font-size: 56%;
}
}


@media(max-width: 75em){
:root {
    font-size: 59%;
}
}
`
export default GlobalStyles;