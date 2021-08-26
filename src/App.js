import './App.css';
import './assets/css/tailwind.css';
import './assets/css/main.css';
import Body from './Components/Body';
import PageWrapper from './Components/PageWrapper';
import Wrapper from './Components/Wrapper';
import Banner from './Components/Banner';
import SpotLight from './Components/SpotLight';
import { useEffect } from 'react';
import Setup from './bootstrap/Setup';
import Panel from './Components/Panel';
import Gallery from './Components/Gallery';
import EmploymentHistory from './Components/EmploymentHistory';
import AppliedStudies from './Components/AppliedStudies';
import Contact from './Components/Contact';
import FulfilledProjects from './Components/FulfilledProjects';
function App() {
  useEffect(
    () => {
      require('./assets/js/main.js');
    }
    , []);
  return (
    <Setup>
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
    </Setup>
  );
}

export default App;
