'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect } from 'react';

const Main = () => {
  const { data: session } = useSession();
  console.log('session', session);

  useEffect(() => {
    // Create a new EventSource instance and store it in the ref
    const eventSource = new EventSource(`http://localhost:3001/notifications/`);
    // Event listener to handle incoming SSE messages
    eventSource.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      // Handle the received data
      console.log('Received SSE:', data);
    });

    return () => {
      // Clean up the EventSource connection when the component unmounts
      eventSource.close();
    };
  }, []);
  return (
    <div>
      {session ? (
        'session 있어요'
      ) : (
        <>
          <Link href={'/auth'}>로그인하자 세션이 없으니</Link>
        </>
      )}
    </div>
  );
};

export default Main;
