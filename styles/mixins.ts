import { keyframes } from 'styled-components';
import { css } from 'styled-components';

const mixins = {

    flexCenter: css`
        display: flex; justify-content: center; align-items: center;
    `,

    flexVerticalCenter: css`
        display: flex; align-items: center;
    `,

    flexColumn: css`
        display: flex; flex-direction: column;
    `,

    flexSpaceBetween: css`
        display: flex; justify-content: space-between;
    `,
    
    CTAButton: css`
        color: var(--white); font-size: var(--ft-xs); font-family: var(--font-mono);
        line-height: 1; text-decoration: none;  cursor:pointer; height: 40px;
        transition: var(--transition); padding: .5rem 1.75rem;
        border-radius: var(--border-radius2); appearance: none;
        border: none; display: flex; align-items: center;
    `,
  

};

export default mixins;