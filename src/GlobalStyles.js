import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    box-sizing:border-box;
    // colors
    --color-primary:#facf0f;
    --color-secondary:#212529;
    --color-tertary:#555;
    
    //Typography
    font-size: 62.5%;
    font-family: 'Source Sans Pro', sans-serif;  

    
}

*, *::after, *::before {
  box-sizing: border-box;
}

@media(max-width:56.25em ){
:root{
    font-size: 59%;
}


}
@media(max-width: 75em){
:root {
    font-size: 59%;
}

}
`
export default GlobalStyles;