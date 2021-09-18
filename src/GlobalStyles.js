import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --maxWidth:1280px;
    --white:#fff;
    --lightgrey:#eee;
    --medgrey:#353535;
    --darkgrey:#1c1c1c;
    --fontLarge:2.5rem;
    --fontBig:1.5rem;
    --fontMed:1.2rem;
    --fontSmall:1rem;

    *{
        box-sizing:border-box;
        font-family: 'Thasadith', sans-serif;
        
    }

    body{
        padding:0px;
        margin:0px;
       
    }
}




`;

export default GlobalStyle;
