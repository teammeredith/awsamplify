import logo from './logo.svg';
import './App.css';

import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

import { 
  NewHomes,
  NavBar
} from './ui-components';


function App({signOut, user}) {
  return (
    <div className="App">
    <NavBar width={"100vw"}/>
    <Heading level={1}>Hello {user.username}</Heading>
    <Button onClick={signOut}>Sign out</Button>
    <NewHomes/>
  </div>
  );
}

export default withAuthenticator(App, {includeGreetings: true});
