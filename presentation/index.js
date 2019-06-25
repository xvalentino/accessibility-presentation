import React from "react";
import {
  Appear,
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
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
require("normalize.css");

const images = {
  differentTypesOfDisabilities: require("../assets/limitations.png"),
  lawSuitStats: require("../assets/lawSuitStats.png")
};

// not feeling these colors
//
const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica",
    tertiary: "Dank Mono"
  }
);
theme.screen.components.quote.lineHeight = 1.3;
theme.screen.components.text.lineHeight = 1.3;

const Presentation = () => (
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">
        Web Accessibility 101
      </Heading>
    </Slide>
    <Slide>
      <Heading>What is Accessibility?</Heading>
      <Text>
        addresses discriminatory aspects related to equivalent user experience
        for people with disabilities
      </Text>
    </Slide>
    <Slide transition={["zoom"]} bgColor="secondary">
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        What is an impairment?
      </Heading>
      <Text textColor="primary">
        We all have abilities. And we all have limitations to our abilities. An
        impairment is a limitation that could make it harder for you to do
        something.
      </Text>
    </Slide>
    <Slide transition={["zoom"]} textColor="tertiary">
      <Text textColor="secondary">
        The Web is an increasingly important resource in many aspects of life:
        education, employment, government, commerce, health care, recreation,
        and more. It is essential that the Web be accessible in order to provide
        equal access and equal opportunity to people with diverse abilities
      </Text>
    </Slide>
    <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
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
    <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
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
        What is web accessibility?
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
    <Slide transition={["zoom"]} bgColor="primary">
      <Image src={images.differentTypesOfDisabilities} />
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
          expensive bandwidth
        </ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading textColor="quaternary">How does it help?</Heading>
      <Text textColor="tertiary">Example: Captions</Text>
      <Text textColor="tertiary">
        Captions can accomodate those who cannot hear at all, as well as those
        in a quiet or loud place.
      </Text>
    </Slide>
    <Slide transition={["zoom"]} bgColor="primary">
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
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading>What can you do?</Heading>
      <List>
        <ListItem>Go to w3.org/WAI and watch videos</ListItem>
        <ListItem>
          Consider how you can advocate to make a more inclusive experience.
        </ListItem>
      </List>
    </Slide>
    <Slide>
      <Heading>State of web a11y</Heading>
    </Slide>
    <Slide>
      <Heading>Legal</Heading>
      <Image src={images.lawSuitStats} />
      <Text>
        Lawsuit cases around web a11y went up 181% from 2017 - 2018. There are
        tons of statistics out there showing a11y users are increasing rapidly
        and so are legal cases.
      </Text>
    </Slide>
    <Slide>
      <Heading>What kind of benefits?</Heading>
    </Slide>
    <Slide>
      <Heading>Questions?</Heading>
    </Slide>
    <Slide>
      <Heading>Sources</Heading>
      <List>
        <ListItem>
          Web Accessibility Initiative (WAI),
          www.w3.org/WAI/fundamentals/accessibility-intro/#what.
        </ListItem>
        <ListItem>
          Microsoft Inclusive Design,
          https://www.microsoft.com/design/inclusive/
        </ListItem>
      </List>
    </Slide>
  </Deck>
);
export default Presentation;
