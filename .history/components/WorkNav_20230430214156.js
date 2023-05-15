import Link from 'next/link';

function WorkNav() {

    return (
        <nav className="sticky pr-5 md:pr-12 h-10 top-20">
            <ul className="list-none">
                <p>Nav</p>
                <li>Overview</li>
                <li>About</li>
            </ul>
        </nav>
    );
}

export default WorkNav