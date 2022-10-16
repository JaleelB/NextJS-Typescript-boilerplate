import { css } from "styled-components";

const variables = css`

    :root{
        //color styles 
        --black-bg: #141414; 
        --white: #fff; 
        --black: #000;
        --pale-white: hsla(0,0%,100%,.8);


        //fonts
        --ft-sans: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;

       --ft-xxs: .7rem;
        --ft-xs: .8rem;
        --ft-sm: .9rem;
        --ft-md: 1rem;
        --ft-lg: 1.13rem;

        --transition: 250ms all ease;
        --transition2: .8s cubic-bezier(0.86, 0, 0.07, 1);

    }
`;

export default variables;