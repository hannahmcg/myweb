import Link from 'next/link';

function WorkNav() {

    return (
        <nav className="sticky pr-2 md:pr-12 h-10 top-20">
            <ul className="list-none">
                <p>Nav</p>
                <li><a href="#1" className="hover:text-light-blue-300 active:text-light-blue-700">Overview</a></li>
                <li><a href="#2">About</a></li>
            </ul>
        </nav>
    );
}

export default WorkNav