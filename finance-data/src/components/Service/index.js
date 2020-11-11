import React from 'react';
import Icon1 from '../../images/ourgoal.png';
import Icon2 from '../../images/projection.png';
import Icon3 from '../../images/finantialdata.png';
import Icon4 from '../../images/businessanalytic.png';

import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2,ServicesP} from './ServicesElements';


const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Flexible Plans</ServicesH1>
      <ServicesWrapper>
          <ServicesCard>
              <ServicesIcon src={Icon1}/>
              <ServicesH2>
                  ENTERPRISE
              </ServicesH2>
              <ServicesP>
                  Pay-As-You-Go pricing based on what your business needs
              </ServicesP>
          </ServicesCard>

          <ServicesCard>
              <ServicesIcon src={Icon2}/>
              <ServicesH2>
                  FOR TEAMS
              </ServicesH2>
              <ServicesP>
                  $29/month
              </ServicesP>
          </ServicesCard>

          <ServicesCard>
              <ServicesIcon src={Icon3}/>
              <ServicesH2>
                  FOR INDIVIDUALS
              </ServicesH2>
              <ServicesP>
                  $10/month, billed monthly
              </ServicesP>
          </ServicesCard>

          <ServicesCard>
              <ServicesIcon src={Icon4}/>
              <ServicesH2>
                  STUDENT
              </ServicesH2>
              <ServicesP>
                  FREE for active students
              </ServicesP>
          </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;
