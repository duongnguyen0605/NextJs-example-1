import Nav from '@components/nav';
import '@styles/globals.css';

export const metadata = {
  title: "This is a home page",
  description: "This is a content of home page"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true} >
        <div>
          <div className='gradient' />

          <main className='app'>
            <Nav />
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout