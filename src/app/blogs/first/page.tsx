import Link from 'next/link';

export default function Blog() {
    return (
        <div>
            <h1>First Blog</h1>
            <p>Ini adalah halaman blog pertama.</p>
            <Link href="/blogs">Back to Blogs</Link>
        </div>
    );
}