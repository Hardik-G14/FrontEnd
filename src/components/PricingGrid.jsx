import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';
const PricingGrid = () => {
    return (
        // inner Container
        <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
            {/* col 1 */}
            <div className="bg-slate-700 rounded-xl text-white">
                {/* upper container */}
                <div className="p-8 rounded-t-xl mx-3 mt-3 bg-slate-800">
                    <div className="text-center uppercase">
                        Basic
                    </div>
                    <h2 className='mt-10 font-serif text-5xl text-center'>
                        100GB
                    </h2>
                    <h3 className="mt-2 text-center">$1.99/Month</h3>
                    <div className="flex justify-center">
                        <a href='#' className='inline-block px-10 py-3 my-6 border border-violet-600 rounded-lg
                        hover:bg-violet-800 hover:border-violet-800 duration-200'> Purchase</a>
                    </div>
                </div>
                {/* border */}
                <div className="border-t border-slate-700"></div>
                {/* lowercontainer */}
                <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
                    <div className="flex flex-col space-y-2">
                        <div className="flex justify-center">
                            <CheckIcon />
                            <span className="text-sm">100 GB of storage</span>
                        </div>
                        <div className="flex justify-center">
                            <CheckIcon />

                            <span className="text-sm">Option to add members</span>
                        </div>
                        <div className="flex justify-center">
                            <CheckIcon />
                            <span className="text-sm">Extra member benefits</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-violet-700 rounded-xl text-white md:scale-110">
                {/* upper container */}
                <div className="p-8 rounded-t-xl mx-3 mt-3 bg-slate-800 border-b border-slate-700">
                    <div className="text-center uppercase">
                        Basic
                    </div>
                    <h2 className='mt-10 font-serif text-5xl text-center'>
                        100GB
                    </h2>
                    <h3 className="mt-2 text-center">$1.99/Month</h3>
                    <div className="flex justify-center">
                        <a href='#' className='inline-block px-10 py-3 my-6 border border-violet-600 rounded-lg
                        hover:bg-violet-800 hover:border-violet-800 duration-200'> Purchase</a>
                    </div>
                </div>
                {/* border */}
                {/* <div className="border-t border-slate-700"></div> */}
                {/* lowercontainer */}
                <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
                    <div className="flex flex-col space-y-2">
                        <div className="flex justify-center">
                            <CheckIcon />
                            <span className="text-sm">100 GB of storage</span>
                        </div>
                        <div className="flex justify-center">
                            <CheckIcon />
                            <span className="text-sm">Option to add members</span>
                        </div>
                        <div className="flex justify-center">
                            <CheckIcon />
                            <span className="text-sm">Extra member benefits</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-700 rounded-xl text-white">
                {/* upper container */}
                <div className="p-8 rounded-t-xl mx-3 mt-3 bg-slate-800">
                    <div className="text-center uppercase">
                        Basic
                    </div>
                    <h2 className='mt-10 font-serif text-5xl text-center'>
                        100GB
                    </h2>
                    <h3 className="mt-2 text-center">$1.99/Month</h3>
                    <div className="flex justify-center">
                        <a href='#' className='inline-block px-10 py-3 my-6 border border-violet-600 rounded-lg
                        hover:bg-violet-800 hover:border-violet-800 duration-200'> Purchase</a>
                    </div>
                </div>
                {/* border */}
                <div className="border-t border-slate-700"></div>
                {/* lowercontainer */}
                <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
                    <div className="flex flex-col space-y-2">
                        <div className="flex justify-center">
                            <CheckIcon />
                            <span className="text-sm">100 GB of storage</span>
                        </div>
                        <div className="flex justify-center">
                            <CheckIcon />
                            <span className="text-sm">Option to add members</span>
                        </div>
                        <div className="flex justify-center">
                            <CheckIcon />
                            <span className="text-sm">Extra member benefits</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingGrid