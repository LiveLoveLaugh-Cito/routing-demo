import Link from 'next/link';

export default function Blog() {
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                <li><Link href="/blogs/first">First Blog</Link></li>
                <li><Link href="/blogs/first/second">Second Blog</Link></li>
            </ul>
            <Link href="/">Back to Home</Link>
        </div>
    );
}