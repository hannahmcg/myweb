import Link from 'next/link';

function WorkNav() {

    return (
        <nav className="overflow-y-scroll scrollbar-hide bg-black text-white sticky">
            <ul className="list-none">
                <p>Nav</p>
                <li>Overview</li>
                <li>About</li>
            </ul>
        </nav>
    );
}

export default WorkNav