import { styled } from 'styled-components';
import { theme } from '../styles/theme';
import { gsap } from 'gsap';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import IntroPlantAnimation from '../components/IntroPlantAnimation.jsx';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const IntroSection = styled.section`
  width: 100%;
  height: 500vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10vh;
`;

const AnimationTextWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;

  h2 {
    font-family: 'Oggtext', sans-serif;
    font-size: ${theme.fontSize.xxxl};
    color: white;
    line-height: 12vw;
    letter-spacing: -6px;
    font-weight: ${theme.fontWeight.light};

    @media (max-width: ${theme.breakpoints.phone}) {
      font-size: ${theme.fontSize.xxxxl};
      line-height: 22vw;
    }

    span {
      font-style: italic;
    }
  }
`;

const IntroTextWrapper = styled.div`
  background: red;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40vh;
  top: 40vh;
  z-index: 20;

  h3 {
    font-family: 'Oggtext', sans-serif;
    font-size: ${theme.fontSize.xxl};
    color: white;
    line-height: 5vw;
    letter-spacing: -6px;
    font-weight: ${theme.fontWeight.light};
    opacity: 0;

    span {
      font-style: italic;
      color: ${theme.color.span};
    }

    .subscript {
      font-size: ${theme.fontSize.sm};
      vertical-align: sub;
      font-weight: ${theme.fontWeight.bold};
      letter-spacing: 0px;
    }
  }
`;

gsap.registerPlugin(ScrollTrigger);

// GSAP timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro-animation',
    pin: true,
    start: 'top top',
    endTrigger: '.intro-animation',
    end: 'center center',
    scrub: true,
  },
});

gsap.defaults({
  duration: 1,
  ease: 'none',
});

const introAnimation = () => {
  tl.to('#intro-plant-text', {
    opacity: 1,
  }).to(
    '#intro-plant-text',
    {
      opacity: 0,
    },
    '<'
  );
};

const Intro = () => {
  useEffect(() => {
    // solution to avoid double render in React Strictmode
    const ctx = gsap.context(() => {
      introAnimation();
    });
    return () => ctx.revert(); // <- cleanup!
  });

  return (
    <IntroSection>
      <AnimationTextWrapper className="intro-plant-text" id="intro-plant-text">
        <h2>
          This is <br />a <span>plant</span>
        </h2>
      </AnimationTextWrapper>
      <IntroPlantAnimation className="intro-animation" />
      <IntroTextWrapper className="intro-text">
        <h3>
          Consider these <br />
          variables to help <br />
          this plant <span>survive</span>{' '}
          <span className="subscript">[and thrive]</span>
        </h3>
      </IntroTextWrapper>
    </IntroSection>
  );
};

export default Intro;
