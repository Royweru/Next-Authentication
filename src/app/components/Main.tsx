import React from 'react'

export const Main = () => {
  return (
    <section className="py-28" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}>
            <div className="max-w-100  mx-auto px-4 md:text-center md:px-8">
                <div className="max-w-100 space-y-3 md:mx-auto">
                    <h3 className="text-indigo-600 font-semibold">
                        WELCOME USER
                    </h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Build the future with us
                    </p>
                    <p className="text-gray-600">
                        YOU ARE CURRENTLY LOGED USING NEXT AUTH
                    </p>
                </div>
                <div className="mt-4">
                    <a href="/awsome" className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
                        SEE THE AWESOME PAGE
                    </a>
                </div>
                <h1 className=' text-red-500'>
                   <a href="/api/auth/signout">SIGN OUT</a>
                </h1>
            </div>
        </section>
  )
}
