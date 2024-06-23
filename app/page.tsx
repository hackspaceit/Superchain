import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Gallery',
    },
    {
      action: 'link',
      label: 'Website',
      target: `https://app.optimism.io/superchain/`,
    },
    {
      action: 'link',
      label: 'Mint',
      target: 'https://mint.fun/base/0xdBAA3aBdD9A488D968F316ba5752b5A3A6d056CD',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/riso.png`,
    aspectRatio: '1:1',
  },
  
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'The Riso - Risograph NFT Art',
  description: 'LFG',
  openGraph: {
    title: 'Risograph NFT Art',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/galery.png`],
    
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
