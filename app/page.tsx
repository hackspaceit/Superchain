import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Next Collections',
    },
    {
      action: 'link',
      label: 'Learn More',
      target: `https://app.optimism.io/superchain/`,
    },
    {
      action: 'link',
      label: 'Mint',
      target: 'https://mint.fun/base/0xdBAA3aBdD9A488D968F316ba5752b5A3A6d056CD',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/nft-1.png`,
    aspectRatio: '1:1',
  },
  
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Superchain - Building the Future',
  description: 'LFG',
  openGraph: {
    title: 'Building the Future',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/nft-2.gif`],
    
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Superchain NFT</h1>
    </>
  );
}
