import styled, { keyframes } from 'styled-components';
import fadeIn from 'react-animations/lib/fade-in';

const animationFadeIn = keyframes`${fadeIn}`;

export const FadeInMain = styled.main`
    animation: .5s ${animationFadeIn};
`;

export const FadeInSection = styled.section`
    animation: .5s ${animationFadeIn};
`;
