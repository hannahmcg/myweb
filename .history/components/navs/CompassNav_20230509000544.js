import Link from 'next/link';
import React, { useRef, useEffect, useState } from "react";



function WorkNav() {

    return (
        <div class="grid grid-cols-5">
            <div class="col-span-2">
                <h2 class="text-xl font-medium dark:text-white">Navbar</h2>

                <ul class="sticky top-0" data-hs-scrollspy="#scrollspy-2" data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-2">
                <li data-hs-scrollspy-group>
                    <a href="#item-1" class="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400 active">Item 1</a>
                    <ul>
                    <li class="ml-4">
                        <a href="#item-1-1" class="group flex items-start gap-x-2 py-0.5 text-sm text-gray-700 leading-6 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400">
                        <svg class="w-2 h-6 text-gray-400 overflow-visible group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 2L10.6464 7.64645C10.8417 7.84171 10.8417 8.15829 10.6464 8.35355L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        Item 1-1
                        </a>
                    </li>
                    <li class="ml-4">
                        <a href="#item-1-2" class="group flex items-start gap-x-2 py-0.5 text-sm text-gray-700 leading-6 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400">
                        <svg class="w-2 h-6 text-gray-400 overflow-visible group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 2L10.6464 7.64645C10.8417 7.84171 10.8417 8.15829 10.6464 8.35355L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        Item 1-2
                        </a>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href="#item-2" class="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400">Item 2</a>
                </li>
                <li data-hs-scrollspy-group>
                    <a href="#item-3" class="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400">Item 3</a>
                    <ul>
                    <li class="ml-4">
                        <a href="#item-3-1" class="group flex items-start gap-x-2 py-0.5 text-sm text-gray-700 leading-6 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400">
                        <svg class="w-2 h-6 text-gray-400 overflow-visible group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 2L10.6464 7.64645C10.8417 7.84171 10.8417 8.15829 10.6464 8.35355L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        Item 3-1
                        </a>
                    </li>
                    <li class="ml-4">
                        <a href="#item-3-2" class="group flex items-start gap-x-2 py-0.5 text-sm text-gray-700 leading-6 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400">
                        <svg class="w-2 h-6 text-gray-400 overflow-visible group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 2L10.6464 7.64645C10.8417 7.84171 10.8417 8.15829 10.6464 8.35355L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        Item 3-2
                        </a>
                    </li>
                    </ul>
                </li>
                </ul>
            </div>

            <div class="col-span-3">
                <div id="scrollspy-2" class="space-y-4">
                <div id="item-1">
                    <h3 class="text-lg font-semibold dark:text-white">Item 1</h3>
                    <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                </div>

                <div id="item-1-1">
                    <h3 class="text-lg font-semibold dark:text-white">Item 1-1</h3>
                    <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                </div>

                <div id="item-1-2">
                    <h3 class="text-lg font-semibold dark:text-white">Item 1-2</h3>
                    <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                </div>

                <div id="item-2">
                    <h3 class="text-lg font-semibold dark:text-white">Item 2</h3>
                    <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                </div>

                <div id="item-3">
                    <h3 class="text-lg font-semibold dark:text-white">Item 3</h3>
                    <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                </div>

                <div id="item-3-1">
                    <h3 class="text-lg font-semibold dark:text-white">Item 3-1</h3>
                    <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                </div>

                <div id="item-3-2">
                    <h3 class="text-lg font-semibold dark:text-white">Item 3-2</h3>
                    <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                </div>
                </div>
            </div>
        </div>
        


    );
}

export default WorkNav