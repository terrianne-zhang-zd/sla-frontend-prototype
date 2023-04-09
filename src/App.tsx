import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import ResolutionMetrics from './components/ResolutionMetrics'
import Autocomplete from './components/Autocomplete';
import Input from './components/Input';
import TextButton from './components/TextButton';
import SolidButton from './components/SolidButton';
import ReplyMetrics from './components/ReplyMetrics';
import UpdateMetrics from './components/UpdateMetrics';
import RequesterWaitTime from './components/RequesterWaitTime';
import { SM, MD, LG, XL, XXL, XXXL } from '@zendeskgarden/react-typography';
import { Anchor } from '@zendeskgarden/react-buttons';


function App() {
  return (
    <>
    <div>
      <ThemeProvider>
        <div className='title'>
          <LG>SLA targets</LG>
        </div>
        <div className='text'>
          <MD>Choose a time target for each metric by every ticket priority level. Choose whether time is measured in “calendar hours” or “business hours.”</MD>
        </div>
        <div className='text'>
          <Anchor isExternal href="https://garden.zendesk.com/" target="_blank">
            Learn about metrics
          </Anchor>
        </div>
        <div className='well'>
          <ReplyMetrics/>
        </div>
        <div className='well'>
          <UpdateMetrics/>
        </div>
        <div className='well'>
          <ResolutionMetrics/>
        </div>
        <div className='well'>
          <RequesterWaitTime/>
        </div>
      </ThemeProvider>
    </div>
    </>
  );
}

export default App;
