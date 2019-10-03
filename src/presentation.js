import React from 'react';

import {
  Appear,
  Code,
  CodePane,
  Deck,
  Heading,
  ListItem,
  Link,
  List,
  Slide,
  Text,
  Image,
  SlideSet,
  Fill,
  Layout,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';
import 'prism-themes/themes/prism-darcula.css';
/* Images */

import qrUTB from './assets/qrutb.png';
import utb from './assets/utb.png';
// Service worker diagram

import sw1 from './assets/sw1.png';
import sw2request from './assets/sw2request.png';
import sw3response from './assets/sw3response.png';
import sw4serviceWorker from './assets/sw4serviceWorker.png';
import sw5serviceWorkerRequest from './assets/sw5serviceWorkerRequest.png';
import sw6serviceWorkerResponse from './assets/sw6serviceWorkerResponse.png';
import sw7cache from './assets/sw7cache.png';
import sw8cacheRequest from './assets/sw8cacheRequest.png';
import sw9cacheLookup from './assets/sw9cacheLookup.png';
import sw10cacheRetrieve from './assets/sw10cacheRetrieve.png';
import sw11cacheResponse from './assets/sw11cacheResponse.png';
import sw12cacheResponseOffline from './assets/sw12cacheResponseOffline.png';

import newVersionAvailablePopup from './assets/newVersionAvailablePopup.jpg';
import newVersionAvailableFullscreen from './assets/newVersionAvailableFullscreen.png';
import updatingServiceWorker from './assets/updatingServiceWorker.jpg';

import lighthouseResults from './assets/lighthouse-results.png';

import manifestTab from './assets/manifest-tab.png';
import serviceworkersTab from './assets/serviceworkers-tab.png';
import storageTab from './assets/storage-tab.png';
import androidInstallation from './assets/android-installation.gif';
import iosInstallation from './assets/ios-installation.gif';

import pwaLogo from './assets/pwa-logo.png';
import appShell from './assets/app-shell.jpg';

import netRace from './assets/cache-and-network-race.png';
import cacheFirst from './assets/cache-then-network.png';
import fallbackNetwork from './assets/falling-back-to-network.png';
import genericFallback from './assets/generic-fallback.png';
import netFirst from './assets/network-falling-back-to-cache.png';
import netOnly from './assets/network-only.png';

require('normalize.css');
require('./override.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#8E8E8E',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

export default class Presentation extends React.Component {
  renderListItem = text => (
    <Appear>
      <ListItem padding="0 0 10px 0">{text}</ListItem>
    </Appear>
  );

  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide transition={['zoom']}>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Progressive Web Applications
          </Heading>
          <Heading size={5} margin="30px 0 0" textColor="tertiary">
            Lenka Vondrackova
          </Heading>
          <Text margin="30px 0 0" textColor="tertiary">
            With support from Martin Kapal & Matus Giertl
          </Text>
        </Slide>

        <SlideSet>
          <Slide>
            <Heading size={4}>What is PWA?</Heading>
            <Text>Google defines PWA as web applications that are</Text>
            <List>
              <Appear>
                <ListItem>
                  Reliable (Load instantly even in uncertain network conditions)
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Fast(Respond quickly to user interactions with smooth
                  animations)
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Engaging(Feel like a natural app on the device, with an
                  immersive UX)
                </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={4}>What is PWA?</Heading>
            <Text>It is possible to</Text>
            <List>
              <Appear>
                <ListItem>
                  Install on home screen and use in full screen without store
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>Send push notifications</ListItem>
              </Appear>
              <Appear>
                <ListItem>Work offline</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={4}>What is PWA? (Demo #1)</Heading>
            <Layout>
              <Fill>
                <Text size={4} margin="30px 0 0">
                  PWA by Matus Giertl
                </Text>
                <Image height="300px" src={qrUTB} />
              </Fill>
              <Fill>
                <Image height="400px" src={utb} />
              </Fill>
            </Layout>
            <Text size={4} margin="30px 0 0">
              Try it!
            </Text>
          </Slide>

          <Slide transition={['fade']}>
            <Heading size={3} margin="0 0 50px 0">
              Installation process iOS
            </Heading>
            <Layout>
              <Image src={iosInstallation} />
            </Layout>
          </Slide>
          <Slide transition={['fade']}>
            <Heading size={3} margin="0 0 50px 0">
              Installation process Android
            </Heading>
            <Layout>
              <Image src={androidInstallation} />
            </Layout>
          </Slide>

          <Slide>
            <Heading size={3}>Why?</Heading>
            <List>
              <Appear>
                <ListItem>Achive mobile app like functionality</ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Easy migration of existing mobile first apps
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>Avoid cross-platform mobile development</ListItem>
              </Appear>
              <Appear>
                <ListItem>Native apps deployed to an App Store</ListItem>
              </Appear>
              <Appear>
                <ListItem>Supported by Google and Microsoft</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={['fade']}>
            <Heading size={3} margin="0 0 50px 0">
              Push notifications
            </Heading>
            <List>
              {this.renderListItem('Android only')}
              {this.renderListItem('Use a 3rd party service (e.g. OneSignal)')}
            </List>
          </Slide>

          <Slide transition={['fade']} bgColor="primary" textColor="secondary">
            <Heading size={3}>When YES?</Heading>
            <List>
              <Appear>
                <ListItem>Chat like (Twitter is PWA)</ListItem>
              </Appear>
              <Appear>
                <ListItem>Publishing (The Washington Post)</ListItem>
              </Appear>
              <Appear>
                <ListItem>One time apps (eg. festival lineup)</ListItem>
              </Appear>
              <Appear>
                <ListItem>...</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={['fade']} bgColor="primary" textColor="secondary">
            <Heading size={3}>When NO?</Heading>
            <List>
              <Appear>
                <ListItem>Big and complex apps</ListItem>
              </Appear>
              <Appear>
                <ListItem>Heavy graphics</ListItem>
              </Appear>
              <Appear>
                <ListItem>Heavily dependent on gestures</ListItem>
              </Appear>
              <Appear>
                <ListItem>Needs SDK's available only to native</ListItem>
              </Appear>
            </List>
          </Slide>
        </SlideSet>

        <SlideSet>
          <Slide transition={['fade']} bgColor="primary" textColor="secondary">
            <Heading size={3}>How?</Heading>
            <List>
              <ListItem>A supported browser</ListItem>
              <ListItem>
                HTTPS{' '}
                <Appear>
                  <span> (unless on localhost)</span>
                </Appear>
              </ListItem>
              <Appear>
                <ListItem>Manifest</ListItem>
              </Appear>
              <Appear>
                <ListItem>ServiceWorker</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide transition={['fade']} bgColor="primary">
            <Heading size={3} margin="20px 0">
              Web App Manifest
            </Heading>
            <List>
              {this.renderListItem('Simple JSON file')}
              {this.renderListItem('Controls the app appearance after launch')}
              {this.renderListItem('Contains basic information about the app')}
              {this.renderListItem('Define version, icons, splash screen...')}
            </List>
          </Slide>

          <Slide transition={['fade']}>
            <Heading size={3} margin="20px 0">
              A typical manifest looks like...
            </Heading>
            <Appear>
              <CodePane
                textSize="20px"
                lang="js"
                theme="light"
                source={require('./assets/manifest.json.example')}
              />
            </Appear>
          </Slide>

          <Slide transition={['fade']}>
            <Heading size={3} margin="20px 0">
              iOS meta tags
            </Heading>
            <Appear>
              <CodePane
                textSize="17px"
                lang="html"
                theme="light"
                source={require('./assets/ios-tags.html.example')}
              />
            </Appear>
          </Slide>

          <Slide transition={['fade']} bgColor="primary">
            <Heading size={3} margin="20px 0">
              Service Worker
            </Heading>
            <List>
              {this.renderListItem('What it does?')}
              {this.renderListItem('What it is?')}
              {this.renderListItem('Lifecycle')}
              {this.renderListItem('Patterns')}
            </List>
          </Slide>

          <Slide transition={['none']} bgColor="primary" textColor="secondary">
            <Image src={sw1} />
          </Slide>

          <Slide transition={['none']} bgColor="primary" textColor="secondary">
            <Image src={sw2request} />
          </Slide>

          <Slide transition={['none']} bgColor="primary" textColor="secondary">
            <Image src={sw3response} />
          </Slide>

          <Slide transition={['none']} bgColor="primary" textColor="secondary">
            <Image src={sw1} />
          </Slide>

          <Slide transition={['none']} bgColor="primary" textColor="secondary">
            <Image src={sw4serviceWorker} />
          </Slide>

          <Slide transition={['none']} bgColor="primary" textColor="secondary">
            <Image src={sw5serviceWorkerRequest} />
          </Slide>

          <Slide transition={['none']} bgColor="primary" textColor="secondary">
            <Image src={sw6serviceWorkerResponse} />
          </Slide>

          <Slide transition={['none']} bgColor="primary" textColor="secondary">
            <Image src={sw4serviceWorker} />
          </Slide>

          <Slide transition={['none']} bgColor="primary" textColor="secondary">
            <Image src={sw7cache} />
          </Slide>

          <Slide transition={['none']} bgColor="primary" textColor="secondary">
            <Image src={sw8cacheRequest} />
          </Slide>

          <Slide transition={['none']} bgColor="primary" textColor="secondary">
            <Image src={sw9cacheLookup} />
          </Slide>

          <Slide transition={['none']} bgColor="primary" textColor="secondary">
            <Image src={sw10cacheRetrieve} />
          </Slide>

          <Slide transition={['none']} bgColor="primary" textColor="secondary">
            <Image src={sw11cacheResponse} />
          </Slide>

          <Slide transition={['none']} bgColor="primary" textColor="secondary">
            <Image src={sw12cacheResponseOffline} />
          </Slide>
        </SlideSet>

        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3}>Service worker - what it is?</Heading>
          <List>
            <Appear>
              <ListItem>Acts as a programmable network proxy</ListItem>
            </Appear>
            <Appear>
              <ListItem>Runs in the background</ListItem>
            </Appear>
            <Appear>
              <ListItem>Cannot access DOM directly</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} margin="20px 0">
            Service worker file
          </Heading>
          <CodePane
            textSize="24px"
            lang="js"
            theme="light"
            source={require('./assets/serviceWorkerListeners.js.example')}
          />
          <Code textSize="30px" margin="20px">
            service-worker.js
          </Code>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3}>Service worker lifecycle</Heading>
          <List>
            <Appear>
              <ListItem>Registration</ListItem>
            </Appear>
            <Appear>
              <ListItem>Installation</ListItem>
            </Appear>
            <Appear>
              <ListItem>Activation</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} margin="20px 0">
            Registration
          </Heading>
          <CodePane
            theme="light"
            textSize="26px"
            lang="js"
            source={require('./assets/serviceWorkerRegistration.js.example')}
          />
          <Code textSize="30px" margin="20px">
            app.js
          </Code>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} margin="40px 0">
            Registration
          </Heading>
          <Text size={4} margin="40px 0">
            With Create React App
          </Text>
          <CodePane
            textSize="28px"
            lang="js"
            theme="light"
            source={`serviceWorker.register();`}
          />
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} margin="20px 0">
            Installation
          </Heading>
          <Text margin="20px 0">Good time to cache static assets</Text>
          <CodePane
            textSize="28px"
            lang="js"
            theme="light"
            source={require('./assets/serviceWorkerInstallation.js.example')}
          />
          <Code textSize="30px" margin="20px">
            service-worker.js
          </Code>
        </Slide>

        <Slide transition={['fade']}>
          <Image src={appShell} />
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} margin="20px 0">
            Serve cached data
          </Heading>
          <Appear>
            <div>
              <Text margin="20px 0">
                Cache-first strategy – good for static assets
              </Text>
              <CodePane
                textSize="28px"
                lang="js"
                theme="light"
                source={require('./assets/serviceWorkerFetchCacheFirst.js.example')}
              />
              <Code textSize="30px" margin="20px">
                service-worker.js
              </Code>
            </div>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="secondary">
          <Heading size={3} margin="20px 0">
            How to handle app updates?
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Make sure <Code>service-worker.js</Code> is not cached or
                renamed!
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Update the file with new static assets
                <Appear>
                  <span>
                    <br />
                    ...or let the framework do it for you
                  </span>
                </Appear>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3}>Updating the app in the browser</Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} margin="20px 0">
            When does the browser check for updates?
          </Heading>
          <List>
            {this.renderListItem('On page reload')}
            {this.renderListItem('When you close and reopen the app')}
            {this.renderListItem(
              'User goes to a different page – does not work in SPA, workaround needed',
            )}
            {this.renderListItem('Every 24 hours')}
          </List>
          <Appear>
            <div>
              <Text margin="50px 0">
                Make sure your service worker is NOT cached!
              </Text>
            </div>
          </Appear>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4} margin="20px 0">
            What happens next...
          </Heading>
          <List>
            {this.renderListItem('New worker enters the “waiting” state')}
            {this.renderListItem('Refreshing the page is not enough!')}
            {this.renderListItem(
              'Old app must be closed to activate the new worker',
            )}
            {this.renderListItem('Solution: App refresh popup')}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Image src={newVersionAvailablePopup} />
        </Slide>

        <Slide transition={['fade']}>
          <Image src={newVersionAvailableFullscreen} />
        </Slide>

        <Slide transition={['fade']}>
          <Image src={updatingServiceWorker} />
          <Link href="https://deanhume.com/displaying-a-new-version-available-progressive-web-app/">
            https://deanhume.com/displaying-a-new-version-available-progressive-web-app/
          </Link>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} margin="20px 0">
            What about caching dynamic data?
          </Heading>
          <List>
            {this.renderListItem('Service worker patterns')}
            {this.renderListItem(
              <>
                Redux Persist
                <Appear>
                  <span>
                    {' '}
                    – with additional offline detection & error handling
                  </span>
                </Appear>
              </>,
            )}
          </List>
        </Slide>
        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Heading size={4} margin="20px 0">
            Dynamic Caching Patterns
          </Heading>
        </Slide>

        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Heading size={4} margin="20px 0">
            Network only
          </Heading>
          <Image src={netOnly} />
        </Slide>

        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Heading size={4} margin="20px 0">
            Cache and network Race
          </Heading>
          <Image src={netRace} />
        </Slide>

        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Heading size={4} margin="20px 0">
            Cache first
          </Heading>
          <Image src={cacheFirst} />
        </Slide>

        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Heading size={4} margin="20px 0">
            Network first
          </Heading>
          <Image src={netFirst} />
        </Slide>

        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Heading size={4} margin="20px 0">
            Falling Back to network
          </Heading>
          <Image src={fallbackNetwork} />
        </Slide>
        <Slide transition={['none']} bgColor="primary" textColor="secondary">
          <Heading size={4} margin="20px 0">
            Generic Fallback
          </Heading>
          <Image src={genericFallback} />
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3} margin="20px 0">
            How to make it easier?
          </Heading>
          <List>
            <Appear>
              <ListItem>Create React App uses Workbox</ListItem>
            </Appear>
            <Appear>
              <ListItem>Precache manifest generated automatically</ListItem>
            </Appear>
            <Appear>
              <ListItem>Static assets cached by default</ListItem>
            </Appear>
            <Appear>
              <ListItem>Use library for caching (ReduxOffline)</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3}>Testing and tooling</Heading>
          <List>
            {this.renderListItem('Automated testing tools same as non-PWA')}
            {this.renderListItem('Lighthouse')}
            {this.renderListItem('Chrome DevTools')}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={3}>Lighthouse</Heading>
          <List>
            {this.renderListItem(
              'Automated auditing tool for improving the quality of web pages',
            )}
            {this.renderListItem('Accessible via Chrome Dev Tools')}
            {this.renderListItem('Supported on any kind of web pages')}
            {this.renderListItem(
              'Includes many different types of audits, including PWA',
            )}
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4}>PWA audit results</Heading>
          <Image src={lighthouseResults} />
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4}>LightHouse (Demo #2)</Heading>
        </Slide>

        <Slide>
          <Heading size={3}>Chrome Dev Tools</Heading>
          <List>
            {this.renderListItem('Your best friend for PWAs')}
            {this.renderListItem(
              'Offers insight into critical areas of your app',
            )}
            {this.renderListItem('Application tab in Chrome :)')}
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>Manifest section</Heading>
          <Image src={manifestTab} />
        </Slide>

        <Slide>
          <Heading size={4}>Service Workers section</Heading>
          <Image src={serviceworkersTab} />
        </Slide>

        <Slide>
          <Heading size={4}>Storage Tab</Heading>
          <Image src={storageTab} />
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={4}>Dev Tools (Demo #3)</Heading>
        </Slide>

        <Slide>
          <Heading size={4}>Play Store criteria</Heading>
          <List>
            {this.renderListItem('Passing the current PWA criteria')}
            {this.renderListItem('Performance score of 80/100 from Lighthouse')}
            {this.renderListItem('All current Play Store rules')}
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>iOS limitations</Heading>
          <List>
            {this.renderListItem('No push notifications')}
            {this.renderListItem('No store')}
            {this.renderListItem('No background sync')}
            {this.renderListItem('No orientation lock')}
            {this.renderListItem('The banner needs to be implemented manually')}
            {this.renderListItem('The app needs to be installed manually')}
            {this.renderListItem('Only from Safari')}
            {this.renderListItem('Only 50MB of memory')}
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>What will piss you off?</Heading>
          <List>
            {this.renderListItem('Service worker testing...')}
            {this.renderListItem('Cache...')}
            {this.renderListItem('Should behave the same in every browser...')}
          </List>
        </Slide>

        <Slide>
          <Heading size={4}>What to avoid/be aware of?</Heading>
          <List>
            {this.renderListItem('Unreliable version update')}
            {this.renderListItem('API versioning!! or hard update?')}
            {this.renderListItem('No refresh in fullscreen')}
            {this.renderListItem('Be careful with gestures')}
            {this.renderListItem('Unreliable notification delivery?')}
          </List>
        </Slide>

        <Slide>
          <Heading>Thanks!</Heading>
          <Image src={pwaLogo} />
        </Slide>
      </Deck>
    );
  }
}
