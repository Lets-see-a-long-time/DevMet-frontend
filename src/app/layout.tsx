import Link from 'next/link';
import './globals.css';
import ReactQueryProvider from './ReactQueryProvider';
import SessionInjector from './SessionInjector';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <SessionInjector>{children}</SessionInjector>
        </ReactQueryProvider>
        <Link href={'/auth'}>로그인으로가</Link>
        <Link className="borderbox" href={'/user'}>
          유저페이지로가
        </Link>
      </body>
    </html>
  );
}
