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
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
  height: 100vh;
  top: 0;
  z-index: 20;

  @media (max-width: ${theme.breakpoints.phone}) {
    padding-left: 3rem;
    max-width: 70vw;
  }

  h3 {
    position: relative;
    font-family: 'Oggtext', sans-serif;
    font-size: ${theme.fontSize.xl};
    color: white;
    line-height: 5vw;
    letter-spacing: 0;
    font-weight: ${theme.fontWeight.light};
    opacity: 0;

    @media (max-width: ${theme.breakpoints.phone}) {
      font-size: ${theme.fontSize.xxl};
      overflow-wrap: break-word;
      line-height: 9.5vw;
    }

    span {
      font-style: italic;
      color: ${theme.color.span};
    }

    .subscript {
      font-size: ${theme.fontSize.sm};
      vertical-align: sub;
      font-weight: ${theme.fontWeight.bold};
      letter-spacing: 0px;
      @media (max-width: ${theme.breakpoints.phone}) {
        font-size: 1rem;
      }
    }
  }
`;

const introAnimation = () => {
  // register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.intro-plant-text', {
    scrollTrigger: {
      trigger: '.intro-animation',
      start: 'center center',
      end: 'center 200px',
      scrub: true,
    },
    opacity: 0,
  });

  gsap.to('.intro-animation', {
    scrollTrigger: {
      trigger: '.intro-animation',
      start: 'center 60%',
      end: 'bottom 100px',
      scrub: true,
    },
    css: {
      /* transform: 'translate3d(26vw, 0px, 0px) scale3d(1.4, 1.4, 1)', */
      left: '26vw',
      scale: '1.4',
    },
    duration: 2,
  });

  gsap.to('.intro-text', {
    scrollTrigger: {
      trigger: '.intro-text',
      start: 'center center',
      end: 'bottom 100px',
      scrub: true,
    },
    css: {
      opacity: 1,
      left: '-15vw',
    },
  });

  /*   // GSAP timeline
  const tl = gsap
    .timeline()
    .from('.intro-plant-text', {
      opacity: 1,
    })
    .to('.intro-plant-text', {
      delay: 1,
      opacity: 0,
      duration: 1,
    })
    .to('.intro-animation', {
      x: 100,
      scale: 2,
      duration: 1,
    });

  ScrollTrigger.create({
    animation: tl,
    trigger: '.container',
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    markers: true,
  }); */
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
    <IntroSection className="container">
      <AnimationTextWrapper>
        <h2 className="intro-plant-text">
          This is <br />a <span>plant</span>
        </h2>
      </AnimationTextWrapper>
      <IntroPlantAnimation />
      <IntroTextWrapper>
        <h3 className="intro-text">
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
