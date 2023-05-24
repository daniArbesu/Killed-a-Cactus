import Lottie from 'lottie-react';
import introAnimation from '../assets/lotties/intro-spin.json';
import { theme } from '../styles/theme';
import { styled } from 'styled-components';

const interactivity = {
  mode: 'scroll',
  actions: [
    {
      visibility: [0, 0.7],
      type: 'seek',
      frames: [0, 60],
    },
    {
      visibility: [0.7, 1.0],
      type: 'seek',
      frames: [60, 90],
    },
  ],
};

const IntroLottieWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 40vw;
  z-index: 20;

  @media (max-width: ${theme.breakpoints.phone}) {
    width: 100%;
  }
`;

const LottieAnimation = styled(Lottie)`
  position: relative;
`;

const IntroPlantAnimation = () => {
  return (
    <IntroLottieWrapper>
      <LottieAnimation
        interactivity={interactivity}
        animationData={introAnimation}
        autoplay={false}
        className="intro-animation"
      />
    </IntroLottieWrapper>
  );
};

export default IntroPlantAnimation;
