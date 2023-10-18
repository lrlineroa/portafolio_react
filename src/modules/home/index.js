import React from 'react'
import AppliedStudies from '../../Components/AppliedStudies'
import Banner from '../../Components/Banner'
import Body from '../../Components/Body'
import EmploymentHistory from '../../Components/EmploymentHistory'
import FulfilledProjects from '../../Components/FulfilledProjects'
import PageWrapper from '../../Components/PageWrapper'
import SpotLight from '../../Components/SpotLight'
import Wrapper from '../../Components/Wrapper'
import Contact from '../../Components/Contact'

export default function Home() {
    return (
        <Body>
        <PageWrapper>
          <Wrapper>
            <Banner />
            <SpotLight />
            <AppliedStudies />
            <EmploymentHistory />
            <FulfilledProjects/>
            <Contact />
          </Wrapper>
        </PageWrapper>
      </Body>
    )
}
