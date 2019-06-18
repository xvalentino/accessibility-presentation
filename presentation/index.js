import React from 'react';
import {
  Link,
  BlockQuote,
  Quote,
  Cite,
  Image,
  Deck,
  Heading,
  Slide,
  Text,
  List,
  ListItem
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
require('normalize.css');

const images = {
  differentTypesOfDisabilities: require('../assets/limitations.png')
};

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
    </Slide>
    <Slide transition={['zoom']} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        What is an impairment?
      </Heading>
      <Text>
        We all have abilities. And we all have limitations to our abilities. An
        impairment is a limitation that could make it harder for you to do
        something.
      </Text>
    </Slide>
    <Slide>
      <Text>
        The Web is an increasingly important resource in many aspects of life:
        education, employment, government, commerce, health care, recreation,
        and more. It is essential that the Web be accessible in order to provide
        equal access and equal opportunity to people with diverse abilities
      </Text>
    </Slide>
    <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
      <BlockQuote>
        <Quote>
          In the context of health experience, a disability is any restriction
          or lack of ability (resulting from an impairment) to perform an
          activity in the manner or within the range considered normal for a
          human being.
        </Quote>
        <Cite margin="10px 0 0 30px">World Health Organization</Cite>
      </BlockQuote>
    </Slide>
    <Slide transition={['zoom']} bgColor="secondary" textColor="primary">
      <BlockQuote>
        <Quote>
          Disability is not just a health problem. It is a complex phenomenon,
          reflecting the interaction between features of a person’s body and
          features of the society in which he or she lives.
        </Quote>
        <Cite margin="10px 0 0 30px">World Health Organization</Cite>
      </BlockQuote>
    </Slide>
    <Slide>
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        What is Accessibility?
      </Heading>
      <Text margin="10px 0 0" textColor="tertiary" fit bold>
        On the web, people with disabilities can:
      </Text>
      <List>
        <ListItem>perceive</ListItem>
        <ListItem>understand</ListItem>
        <ListItem>navigate</ListItem>
        <ListItem>interact</ListItem>
        <ListItem>contribute</ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        A11y also accomdates:
      </Heading>
      <List>
        <ListItem>
          people using mobile phones, smart watches, smart TVs, and other
          devices with small screens, different input modes, etc.
        </ListItem>
        <ListItem>older people with changing abilities due to ageing</ListItem>
        <ListItem>
          people with “temporary disabilities” such as a broken arm or lost
          glasses
        </ListItem>
        <ListItem>
          people with “situational limitations” such as in bright sunlight or in
          an environment where they cannot listen to audio
        </ListItem>
        <ListItem>
          people using a slow Internet connection, or who have limited or
          expensive bandwidth j
        </ListItem>
      </List>
    </Slide>
    <Slide transition={['zoom']} bgColor="primary">
      <Image src={images.differentTypesOfDisabilities} />
    </Slide>
    <Slide transition={['zoom']} bgColor="primary">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/20SHvU2PKsM"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      />
    </Slide>
    <Slide>
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Web Accessibility Initiative (WAI)
      </Heading>
      <Text>
        develops standards and support materials to help you understand and
        implement accessibility.
      </Text>
      <Link href="https://www.w3.org/WAI/">https://www.w3.org/WAI/</Link>
    </Slide>
    <Slide transition={['zoom']} bgColor="primary">
      <Heading>What can you do?</Heading>
      <List>
        <ListItem>Go to w3.org/WAI and watch videos</ListItem>
        <ListItem>
          Consider how you can advocate to make a more inclusive experience.
        </ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading>Questions?</Heading>
    </Slide>
    {/* - https://www.w3.org/WAI/fundamentals/accessibility-intro/#what */}
    {/* - Accessibility can enhance your brand, drive innovation, and extend your market reach.  Web accessibility is required by law in many situations. */}
    {/* - The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and implement accessibility. */}
    {/* - - https://www.w3.org/WAI/ */}
    {/* - What can you do?
        check out some videos/poke around on w3.org
        consider the experience of users with disabilities while you do your job
        */}
  </Deck>
);
export default Presentation;
