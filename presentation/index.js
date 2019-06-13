import React from 'react';

import { Deck, Heading, Slide, Text } from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

// const images = {
//   formidagon: require('../assets/formidable-logo.svg'),
//   goodWork: require('../assets/good-work.gif')
// };

require('normalize.css');

// not feeling these colors
const theme = createTheme(
  {
    primary: '#433E43',
    secondary: '#CCBDB2',
    tertiary: '#8E7F8A',
    quaternary: '#715A69'
  },
  {
    primary: 'Operator Mono Lig', // This font is a little distracting
    secondary: 'Helvetica'
  }
);

const Presentation = () => (
  <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
    <Slide transition={['zoom']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Accessibility 101
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" fit bold>
        Some good description
      </Text>
    </Slide>
    {/* Intro web (5 min) */}
    {/* How people with disabilities use the web (10 min) */}
    {/* Business case for a11y (5 min) */}
    {/* Questions? (5 min) */}
  </Deck>
);
export default Presentation;
