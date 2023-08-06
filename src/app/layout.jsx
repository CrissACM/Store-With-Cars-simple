import Providers from '@/store/provider';
import { Montserrat } from 'next/font/google';
import Cart from './cart/Cart';

const mont = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Providers>
        <body className={mont.className}>
          <Cart />
          <div>{children}</div>
        </body>
      </Providers>
    </html>
  );
}