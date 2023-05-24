import { styled } from 'styled-components';
import { theme } from '../styles/theme';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import IntroPlantAnimation from '../components/IntroPlantAnimation.jsx';

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

const Intro = () => {
  return (
    <IntroSection>
      <AnimationTextWrapper>
        <h2>
          This is <br />a <span>plant</span>
        </h2>
      </AnimationTextWrapper>
      <IntroPlantAnimation />
      <IntroTextWrapper>
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
