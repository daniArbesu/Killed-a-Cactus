import { styled } from 'styled-components';
import { theme } from '../styles/theme';
import plant1 from '../assets/images/hero-plants-1.png';
import plant2 from '../assets/images/hero-plants-2.png';
import plant3 from '../assets/images/hero-plants-3.png';
import plant4 from '../assets/images/hero-plants-4.png';

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #acbe9e;
  background-image: linear-gradient(
      225deg,
      rgba(179, 250, 97, 0.9),
      rgba(138, 182, 133, 0.32) 65%
    ),
    url('/hero-bg-texture.jpg');
`;

const HeroImage = styled.img`
  position: absolute;
  max-width: none;
  display: block;
  right: -2vw;

  @media (max-width: ${theme.breakpoints.phone}) {
    bottom: 0%;
    left: -40vw;
    right: 0%;
    top: auto;
    width: 140vw;
  }
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
  z-index: 2;
`;

const Hero = () => {
  return (
    <HeroSection data-scroll-section>
      <FirstImage src={plant1} />
      <SecondImage src={plant2} />
      <ThirdImage src={plant3} />
      <FourthImage src={plant4} />
    </HeroSection>
  );
};

export default Hero;
