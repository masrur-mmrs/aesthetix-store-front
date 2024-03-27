import { ImageResponse } from 'next/og';
import Image from 'next/image';
import OpenGraph from "../opengraph-image.png"
// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
        src={OpenGraph}
        alt='opengraph image'
        ></Image>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}