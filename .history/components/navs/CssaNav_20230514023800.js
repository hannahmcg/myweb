import Link from 'next/link';

function CssaNav() {

    return (
        <nav className="sticky mb-5 bg-white md:bg-transparent md:pr-12 h-10 top-0 md:top-10">
            <ul className="flex justify-between md:flex-col pt-2 md:pt-0 md:space-x-0 list-none text-slate-900 md:space-y-2">
                <li><a href="#1" className="text-sm font-medium hover:text-light-blue-300 active:text-light-blue-700">Overview</a></li>
                <li><a href="#2" className="text-sm font-medium hover:text-light-blue-300 active:text-light-blue-700">Ideation</a></li>
                <li><a href="#3" className="text-sm font-medium hover:text-light-blue-300 active:text-light-blue-700">Design</a></li>
                <li><a href="#4" className="text-sm font-medium hover:text-light-blue-300 active:text-light-blue-700">Engineering</a></li>
                <li><a href="#5" className="text-sm font-medium hover:text-light-blue-300 active:text-light-blue-700">Thoughts</a></li>
                <li><a href="#6" className="text-sm font-medium hover:text-light-blue-300 active:text-light-blue-700">Gallery</a></li>
            </ul>
        </nav>
    );
}

export default CssaNav