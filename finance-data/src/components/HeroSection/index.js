import React from 'react';
import Video from '../../videos/video.mp4';
import {HeroContainer, HeroBg, VideoBg} from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
          <HeroH1>Build and Explore our finance Database API</HeroH1>
          <HeroP>The largest finance Database</HeroP>
          <HeroP>Sign up for a new account today and receive $250 in credit towards your next payment. </HeroP>
          <HeroBtnWrapper>
              <Button to="register">
                  Get started {hover ? <ArrowForward /> :<ArrowRight/>}
              </Button>
          </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
