import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { Heading, Button, Text, Code } from '@chakra-ui/react';

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <Head>
        <title>Fast Feedback demo</title>
      </Head>

      <main>
        <Heading>Fast Feedback</Heading>
        <Text>
          Current User: <Code>{auth.user ? auth.user.name : 'None'}</Code>
          <br />
          Email: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>
        <img src={auth?.user?.photoURL} />
        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signin()}>Sign In</Button>
        )}
      </main>
    </div>
  );
}
