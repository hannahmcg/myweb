import Link from 'next/link';

function WorkNav() {

    return (
        <div className="overflow-y-scroll scrollbar-hide bg-black text-white">
            <ul className="list-none sticky">
                <p>Nav</p>
                <li>Overview</li>
                <li>About</li>
            </ul>
        </div>
    );
}

export default WorkNav