import React from 'react'

const Newsletter = () => {
    return (
        < div className="bg-zinc-800 p-2 mx-6 rounded-2xl" >
            < div className="flex flex-col md:flex-row rounded-l-xl " >
                < img src={ima} alt="some image" className="object-fit h-80 md:h-64 md:rounded-r-none transform hover: scale - 105 hover: rounded-xl duration - 300" />
                <div className="p-6 md:p-12">
                    <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
                        Get Diet and Fitness tips in your inbox
                    </h2>
                    <p className="max-w-sm my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
                        Eat better and exercise better. Signup for diet and fitness. NewsLetter
                    </p>
                    <div className="flex flex-col md:flex-row mt-5 space-y-4 md:space-x-3 md:space-y-0">
                        <input type="text" placeholder="Enter your email address"
                            class="p-2 px-4 text-center text-white bg-zinc-800 border border-color-600 placeholder:text-center placeholder:text-xs md:text-left placeholder:md:text-left focus:outline-none" />
                        <button className="text-xs py-3 px-5 rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white">Subscribe</button>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Newsletter