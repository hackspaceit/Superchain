import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Next Collections',
    },
    {
      action: 'tx',
      label: 'Send Me Coffee',
      target: `${NEXT_PUBLIC_URL}/api/tx`,
      postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
    },
    {
      action: 'link',
      label: 'Mint',
      target: 'https://mint.fun/base/0xdBAA3aBdD9A488D968F316ba5752b5A3A6d056CD',
    },
    {
      action: 'tx',
      label: 'Send Me Coffee',
      target: `${NEXT_PUBLIC_URL}/api/tx`,
      postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
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
  description: 'Do you know about superchains? creates an ecosystem containing a group of L2 blockchains that use shared bridging, governance, updates, and communication layers built on top of the OP Stack.',
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
