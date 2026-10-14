import Link from 'next/link';

export default function Profile() {
    return (
        <div>
            <h1>Hello!, Im Naafi</h1>
            <p>I was born on the 22nd of April 2009 in Indonesia.</p>
            <p>I am currently living in Malang, Indonesia in the province of East Java.</p>
            <p>I am a student at the 4th Vocational High School alias "Grafika"</p>
            <p>I love spending time with my friends.</p>
            <Link href="/">Back to Home</Link>
        </div>
    );
}