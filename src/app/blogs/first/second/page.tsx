import Link from 'next/link';

export default function Blog() {
    return (
        <div>
            <h1>Second Blog</h1>
            <p>Ini adalah halaman blog kedua.</p>
            <Link href="/blogs">Back to Blogs</Link>
        </div>
    );
}