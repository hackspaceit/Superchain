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
      label: 'Zora',
      target: `https://zora.co/collect/base:0xba79ddbf1b5bbe9516bb0000d2630ccd9401039a`,
    },
    {
      action: 'link',
      label: 'Mint',
      target: 'https://zora.co/collect/base:0xba79ddbf1b5bbe9516bb0000d2630ccd9401039a/1',
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
    images: [`${NEXT_PUBLIC_URL}/gallery.png`],
    
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
