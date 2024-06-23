// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV == 'development' ? 'https://riso-gallery.vercel.app' : 'https://riso-gallery.vercel.app';
export const BUY_MY_COFFEE_CONTRACT_ADDR = '0xdBAA3aBdD9A488D968F316ba5752b5A3A6d056CD';
