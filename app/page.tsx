'use client'

import { signIn } from 'next-auth/react'

const page = () => {
  return (
    <div className='relative py-16 bg-transparent'>
      <div className='container relative px-6 m-auto text-white md:px-12 xl:px-40'>
        <div className='m-auto md:w-8/12 lg:w-6/12 xl:w-6/12'>
          <div className='bg-[#190F31] shadow-xl rounded-xl'>
            <div className='p-6 sm:p-16'>
              <div className='space-y-4'>
                <h2 className='mb-8 text-3xl font-bold text-white'>
                  Iniciar Sesión
                </h2>
              </div>
              <div className='grid mt-16 space-y-4'>
                <button
                  className='h-12 px-6 transition duration-300 border-2 border-gray-300 rounded-full group hover:border-blue-400 '
                  onClick={() => signIn('google')}
                >
                  <div className='relative flex items-center justify-center space-x-4'>
                    <img
                      src='https://tailus.io/sources/blocks/social/preview/images/google.svg'
                      className='absolute left-0 w-5'
                      alt='google logo'
                    />
                    <span className='block text-sm font-semibold tracking-wide text-white transition duration-300 w-max group-hover:text-blue-600 sm:text-base'>
                      Continuar con Google
                    </span>
                  </div>
                </button>
                <button
                  className='h-12 px-6 transition duration-300 border-2 border-gray-300 rounded-full group hover:border-blue-400 '
                  onClick={() => signIn('github')}
                >
                  <div className='relative flex items-center justify-center space-x-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      className='absolute left-0 w-5 text-white'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
                    </svg>
                    <span className='block text-sm font-semibold tracking-wide text-white transition duration-300 w-max group-hover:text-blue-600 sm:text-base'>
                      Continuar con Github
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
