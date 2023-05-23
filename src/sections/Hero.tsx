import { styled } from 'styled-components';
import { theme } from '../styles/theme';
import plant1 from '../assets/images/hero-plants-1.png';
import plant2 from '../assets/images/hero-plants-2.png';
import plant3 from '../assets/images/hero-plants-3.png';
import plant4 from '../assets/images/hero-plants-4.png';

const HeroSection = styled.section`
  width: 100%;
  height: 100svh;
  background-color: #acbe9e;
  background-image: linear-gradient(
      225deg,
      rgba(179, 250, 97, 0.9),
      rgba(138, 182, 133, 0.32) 65%
    ),
    url('/hero-bg-texture.jpg');

  @media (max-width: ${theme.breakpoints.phone}) {
    img {
      bottom: 0;
      left: -40vw;
      right: 0;
      top: auto;
      width: 140vw;
    }
  }
`;

const HeroImage = styled.img`
  position: absolute;
  max-width: none;
  display: block;
  right: -2vw;
`;

const FirstImage = styled(HeroImage)`
  bottom: -35vh;
  width: 87vw;
  z-index: 0;
`;

const SecondImage = styled(HeroImage)`
  bottom: -35vh;
  width: 92vw;
  z-index: 20;
`;

const ThirdImage = styled(HeroImage)`
  bottom: -55vh;
  width: 104vw;
  z-index: 15;
`;

const FourthImage = styled(HeroImage)`
  bottom: -35vh;
  width: 87vw;
  z-index: 20;
`;

const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  padding-left: 1vw;

  p {
    position: relative;
    font-size: ${theme.fontSize.sm};
    color: white;
    line-height: 1.3vw;
    font-weight: ${theme.fontWeight.light};
    padding-top: 2vw;
    padding-left: 2vw;
    z-index: 200;

    @media (max-width: ${theme.breakpoints.phone}) {
      font-size: 1rem;
      line-height: 1.2rem;
      padding-top: 20px;
      padding-left: 15px;
    }
  }

  h1 {
    position: relative;
    font-family: 'Oggtext', sans-serif;
    font-size: ${theme.fontSize.xxxxl};
    color: white;
    line-height: 18vw;
    letter-spacing: -6px;
    font-weight: ${theme.fontWeight.light};
    z-index: 15;

    span {
      font-style: italic;
      z-index: 14;
    }

    @media (max-width: ${theme.breakpoints.phone}) {
      bottom: 30vh;
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection data-scroll-section>
      <FirstImage src={plant1} />
      <SecondImage src={plant2} />
      <ThirdImage src={plant3} />
      <FourthImage src={plant4} />
      <HeroTextWrapper>
        <p>
          A simple guide to houseplants <br />
          for the horticulturally challenged
        </p>
        <h1>
          I killed <br />a <span>cactus</span>
        </h1>
      </HeroTextWrapper>
    </HeroSection>
  );
};

export default Hero;
