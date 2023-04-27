import Navbar from '@/components/common/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />{' '}
      <style jsx global>
        {`
          .blue-clay {
            padding: 3%;
            background: #ffffff;
            box-shadow: 24px 24px 48px rgba(131, 154, 215, 0.55),
              inset -24px -24px 48px #bfd1ff, inset 12px 12px 24px #eff3ff;
            border-radius: 80px;
          }

          .yellow-clay {
            cursor: pointer;
            border-radius: 75px;
            background: #fff5e0;
            box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1),
              inset 4px 4px 4px 4px #ffffff,
              inset 6px 6px 20px 6px rgba(255, 255, 255, 0.7);
          }

          .gray-clay {
            background: #f0f0f3;
            box-shadow: -5px -5px 5px rgba(255, 255, 255, 0.4),
              5px 5px 10px rgba(174, 174, 192, 0.2),
              inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px #ffffff;
            border-radius: 20px;
          }

          .inside-clay {
            background: rgba(175, 186, 206, 0.11);
            box-shadow: inset -5px -2px 4px #ffffff, inset 3px 3px 10px #bac3df;
            border-radius: 12px;
          }

          .inside-circle {
            width: 200px;
            height: 200px;
            border-radius: 100px;
            background: rgba(243, 247, 255, 0.62);
            box-shadow: inset -5px -2px 4px #ffffff, inset 3px 3px 10px #bac3df;
          }

          .green-btn {
            cursor: pointer;
            color: white;
            width: 180px;
            height: 35px;
            border: none;
            background: linear-gradient(315deg, #f0ff94 0%, #1eb0e9 100%);
            border-radius: 12px;
          }
          .center {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
}
