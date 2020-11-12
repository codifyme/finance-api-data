import React from 'react';
import Icon1 from '../../images/data.svg';
import Icon2 from '../../images/finantialdata.png';
import Icon3 from '../../images/ourgoal.png';
import Icon4 from '../../images/projection.png';

import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2,ServicesP} from './ServicesElements';


const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Flexible Plans</ServicesH1>
      <ServicesWrapper>
          <ServicesCard>
              <ServicesIcon src={Icon1}/>
              <ServicesH2>
                  STUDENT
              </ServicesH2>
              <ServicesP>
                  FREE for active students
              </ServicesP>
              <ServicesP>
                  with a .edu and email address
              </ServicesP>
              <ServicesP>
                   2 API Calls - Limitation
              </ServicesP>
              <ServicesP>
                  Unlimited Email support
              </ServicesP>
              <ServicesP>
                  Personal use
              </ServicesP>
          </ServicesCard>

          <ServicesCard>
              <ServicesIcon src={Icon2}/>
              <ServicesH2>
                  INDIVIDUAL
              </ServicesH2>
              <ServicesP>
                  For Personal Project
              </ServicesP>
              <ServicesP>
                  $9.99/Month
              </ServicesP>     
              <ServicesP>
                   4 API Calls - Limitaions
              </ServicesP>
              <ServicesP>
                    Email & Chat support
              </ServicesP>
              <ServicesP>
                  Personal & Commercial use
              </ServicesP>


          </ServicesCard>

          <ServicesCard>
              <ServicesIcon src={Icon3}/>
              <ServicesH2>
                  TEAMS
              </ServicesH2>
              <ServicesP>
                  $39.99/month
              </ServicesP> 
              <ServicesP>
                All features included with Individual plan
              </ServicesP>
              <ServicesP>
                22 API Calls
              </ServicesP>
              <ServicesP>
                Up to 8 Team Members
              </ServicesP>
              <ServicesP>
                SMS Triggers
              </ServicesP>
              <ServicesP>
                Signed Requests
              </ServicesP>
          </ServicesCard>
          <ServicesCard>
              <ServicesIcon src={Icon4}/>
              <ServicesH2>
                  ENTERPRISE
              </ServicesH2>
              <ServicesP>
                  Pay-As-You-Go Pricing
              </ServicesP>
              <ServicesP>
                  Base in what your business needs
              </ServicesP>
              <ServicesP>
                  All features included Team plan 
              </ServicesP>
              <ServicesP>
                  Up to 9000 API Calls
              </ServicesP>
              <ServicesP>
                  Unlimited Team Members
              </ServicesP>
              <ServicesP>
                  Customer support
              </ServicesP>
          </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;
