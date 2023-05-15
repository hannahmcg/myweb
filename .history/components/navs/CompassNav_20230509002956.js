import Link from 'next/link';
import React, { useRef, useEffect, useState } from "react";



function WorkNav() {

    return (
        <div className="">
            <div className="pr-2 md:pr-12 h-10 sticky top-10">
                <ul className="" data-hs-scrollspy="#scrollspy-2">
                <li data-hs-scrollspy-group>
                    <a href="#item-1" className="py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 hs-scrollspy-active:text-blue-600 active">Item 1</a>
                </li>
                <li>
                    <a href="#item-2" className="py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 hs-scrollspy-active:text-blue-600">Item 2</a>
                </li>
                <li data-hs-scrollspy-group>
                    <a href="#item-3" className="py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 hs-scrollspy-active:text-blue-600">Item 3</a>
                </li>
                <li data-hs-scrollspy-group>
                    <a href="#item-4" className="py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 hs-scrollspy-active:text-blue-600">Item 4</a>
                </li>
                </ul>
            </div>
        </div>
        


    );
}

export default WorkNav