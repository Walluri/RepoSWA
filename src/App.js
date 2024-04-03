import React from 'react';
import {
  AuthenticatedTemplate,
  useMsal,
  useMsalAuthentication,
} from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";

function App() {
  const { accounts } = useMsal();
  useMsalAuthentication(InteractionType.Redirect);

  return (
    <AuthenticatedTemplate>
      Hello {`Hello, ${accounts[0]?.idTokenClaims?.name}`}
    </AuthenticatedTemplate>
  );
}

export default App;
