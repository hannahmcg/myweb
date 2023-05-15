import Link from 'next/link';

function WorkNav() {

    return (
        <nav className="sticky pr-2 md:pr-12 h-10 top-20">
            <ul className="list-none">
                <p>Nav</p>
                <li><a href="#1"></a>Overview</li>
                <li>About</li>
            </ul>
        </nav>
    );
}

export default WorkNav