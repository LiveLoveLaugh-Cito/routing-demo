import Link from 'next/link';

export default function Navigation() {
  return (
    <nav style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/products">Products</Link>
      <Link href="/blogs">Blogs</Link>
    </nav>
  );
}
