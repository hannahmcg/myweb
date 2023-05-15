import Link from 'next/link';
import React, { useRef, useEffect, useState } from "react";



function CompassNav() {

    return (
        <nav className="sticky bg-white md:bg-transparent pr-2 md:pr-12 h-10 top-0 md:top-10">
            <ul className="flex text-center space-x-4 md:flex-col pt-2 md:pt-0 md:space-x-0 list-none bg-white md:bg-transparent text-slate-900 md:space-y-2">
                <li><a href="#1" className="text-sm font-medium hover:text-light-blue-300 active:text-light-blue-700">Overview</a></li>
                <li><a href="#2" className="text-sm font-medium hover:text-light-blue-300 active:text-light-blue-700">About</a></li>
                <li><a href="#3" className="text-sm font-medium hover:text-light-blue-300 active:text-light-blue-700">Thoughts</a></li>
                <li><a href="#4" className="text-sm font-medium hover:text-light-blue-300 active:text-light-blue-700">More</a></li>
            </ul>
        </nav>
        


    );
}

export default CompassNav