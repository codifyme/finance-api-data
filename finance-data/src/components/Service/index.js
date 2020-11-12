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
              <ServicesH2>ENTERPRISE</ServicesH2>
              <ServicesP>Pay-As-You-Go pricing based on what your business needs</ServicesP>
              <ServicesP>Longer Data Retention</ServicesP>
              <ServicesP>Higher API Call Rates</ServicesP>
              <ServicesP>Scalable Incoming Data</ServicesP>
              <ServicesP>Multiple User Accounts</ServicesP>
              <ServicesP>Service-Level Agreement</ServicesP>
              <ServicesP>Enterprise Support</ServicesP>
          </ServicesCard>

          <ServicesCard>
              <ServicesIcon src={Icon2}/>
              <ServicesH2>FOR TEAMS</ServicesH2>
              <ServicesP>$29/month</ServicesP>
              <ServicesP>Unlimited Devices</ServicesP>
              <ServicesP>Unlimited Visualizations</ServicesP>
              <ServicesP>180 API Call/min</ServicesP>
              <ServicesP>Real-Time Expressions</ServicesP>
              <ServicesP>Sharing/Non-Enterprise-Embeds</ServicesP>
              <ServicesP>Unlimited Visualizations</ServicesP>
              <ServicesP>180 API Calls/min</ServicesP>
              <ServicesP>Email Support</ServicesP>
          </ServicesCard>

          <ServicesCard>
              <ServicesIcon src={Icon3}/>
              <ServicesH2>
                  FOR INDIVIDUAL
              </ServicesH2>
              <ServicesP>$10/month, billed monthly</ServicesP>
              <ServicesP>Unlimited Devices</ServicesP>
              <ServicesP>Unlimited Visualizations</ServicesP>
              <ServicesP>Individual account for personal project</ServicesP>
              <ServicesP>90 API Calls/Min</ServicesP>
          </ServicesCard>

          <ServicesCard>
              <ServicesIcon src={Icon4}/>
              <ServicesH2>
                  STUDENT
              </ServicesH2>
              <ServicesP>
                  FREE for active students
              </ServicesP>
              <ServicesP>Unlimited Devices</ServicesP>
              <ServicesP>Unlimited Visualizations</ServicesP>
              <ServicesP>2-Months Data Retention</ServicesP>
              <ServicesP>60 API Calls/min</ServicesP>
              <ServicesP>1M Incoming Data Points</ServicesP>
              <ServicesP>With a.edu current email address</ServicesP>
          </ServicesCard>

      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;
