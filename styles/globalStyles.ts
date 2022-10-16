import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyles = createGlobalStyle`
    ${variables}

    ::-moz-selection{ background: var(--yellow-bg); color: var(--black)}
    ::selection { background: var(--yellow-bg); color: var(--black)}

    html {
         width: 100%; scroll-behavior: smooth;
        scrollbar-width: thin; overflow-x:hidden; 
    }
  
    *, *:before, *:after { box-sizing: border-box; margin: 0; padding: 0;}

    body {
        margin: 0; width: 100vw; min-height: 100%;  overflow-x: hidden;
        background-color: var(--white); line-height: 1.3; 
        font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
        font-size: var(--fz-xl);

        

        main{
            width: 100%; min-height: 100vh;

            section{
                width: 100%; height: 100%; 
                padding: 5rem;

                @media screen and (max-width: 480px){ padding: 2.3rem; }
            }
        }


        
    }
`;

export default GlobalStyles; 
