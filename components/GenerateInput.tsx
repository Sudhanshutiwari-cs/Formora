import React from 'react'

const GenerateInput = () => {
    return (
        <form className="flex items-center max-w-2xl mx-auto">
            <label className="sr-only" htmlFor="voice-search">Ready to begin? Just share your info below.</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                        <path d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" />
                    </svg>
                </div>
                <input required placeholder="Ready to begin? Just share your info below." className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="voice-search" type="text" />
                <button className="absolute inset-y-0 end-0 flex items-center pe-4" type="button">
                    <svg viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        <path d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" />
                    </svg>
                </button>
            </div>
            <button className="inline-flex items-center py-3 px-6 ms-3 text-base font-medium text-white bg-slate-800 hover:bg-slate-900 rounded-lg border border-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-700 dark:hover:bg-slate-800 dark:focus:ring-slate-800" type="submit">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-5 h-5 me-3">
                    <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" />
                </svg>
                Generate
            </button>
        </form>
    );
}

export default GenerateInput