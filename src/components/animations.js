import styled, { keyframes } from 'styled-components';
import fadeIn from 'react-animations/lib/fade-in';

const animationFadeIn = keyframes`${fadeIn}`;

export const FadeIn = styled.div`
    animation: .5s ${animationFadeIn};
`;
