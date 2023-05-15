import Link from 'next/link';

function CssaNav() {

    return (
        <nav className="sticky pr-2 md:pr-12 h-10 top-10">
            <ul className="list-none text-slate-900">
                <li><a href="#1" className="text-sm hover:text-light-blue-300 active:text-light-blue-700">Overview</a></li>
                <li><a href="#2" className="text-sm hover:text-light-blue-300 active:text-light-blue-700">Ideation</a></li>
                <li><a href="#3" className="text-sm hover:text-light-blue-300 active:text-light-blue-700">Design</a></li>
                <li><a href="#4" className="text-sm hover:text-light-blue-300 active:text-light-blue-700">Thoughts</a></li>
                <li><a href="#5" className="text-sm hover:text-light-blue-300 active:text-light-blue-700">Gallery</a></li>
            </ul>
        </nav>
    );
}

export default CssaNav