import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  
  return (
    <Html lang="en">
      <Head />
      <body className='w-full max-w-[3000px]  '>
        
        <Main />
        <NextScript />
        <div id="navigation"></div>
      </body>
    </Html>
  )
}
