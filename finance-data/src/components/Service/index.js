import React from 'react';
import Icon1 from '../../images/data.svg';
import Icon2 from '../../images/finance.svg';
import Icon3 from '../../images/data.svg';

import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2,ServicesP} from './ServicesElements';


const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Plans</ServicesH1>
      <ServicesWrapper>
          <ServicesCard>
              <ServicesIcon src={Icon1}/>
              <ServicesH2>
                  For Companies
              </ServicesH2>
              <ServicesP>
                  We help reduce your fess and increase your overall revenue
              </ServicesP>
          </ServicesCard>

          <ServicesCard>
              <ServicesIcon src={Icon2}/>
              <ServicesH2>
                  For Teams
              </ServicesH2>
              <ServicesP>
                  You can access our platform online anywhere in the world
              </ServicesP>
          </ServicesCard>

          <ServicesCard>
              <ServicesIcon src={Icon3}/>
              <ServicesH2>
                  For Individuals
              </ServicesH2>
              <ServicesP>
                  Unlock our special membership card that return 5% cash back
              </ServicesP>
          </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;
