import Head from 'next/head'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500'>
      <div className='container mx-auto min-h-screen'>
        <Head>
          <title>Create Next App with Pre-Commits, sass and tailwind</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className='main align-middle text-center'>
          <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl bg-opacity-25 backdrop-filter backdrop-blur-lg'>
            <div className='md:flex'>
              <div className='md:flex-shrink-0'>
                <img
                  className='h-full w-full object-cover md:w-48'
                  src='https://picsum.photos/600/800'
                  alt='Man looking at item at a store'
                />
              </div>
              <div className='p-8'>
                <h1 className='uppercase tracking-wide font-semibold'>
                  Welcome to{' '}
                  <a href='https://nextjs.org' className='text-indigo-500'>
                    Next.js!
                  </a>
                </h1>
                <p className='block mt-1 text-lg leading-tight font-medium text-black'>
                  With pre-commits, sass and tailwind
                </p>
                <p className='description'>
                  Just run
                  <br />
                  <code className='code'>git add .</code>
                  <br />
                  <code className='code'>git commit -m "your first styled pre-commit"</code>
                </p>
              </div>
            </div>
          </div>
        </main>

        <footer className='footer'>
          <a href='https://severinglaser.ch' target='_blank' rel='noopener noreferrer'>
            Powered by <Logo />
          </a>
        </footer>
      </div>
    </div>
  )
}
