import { styled } from 'styled-components';
import { theme } from '../styles/theme';

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      225deg,
      rgba(179, 250, 97, 0.9),
      rgba(138, 182, 133, 0.32) 65%
    ),
    url('/hero-bg-texture.jpg');
`;

const Hero = () => {
  return <HeroSection data-scroll-section>Hero</HeroSection>;
};

export default Hero;
