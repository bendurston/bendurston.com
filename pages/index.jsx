import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <p>Redirecting...</p>
        <Link href={"/projects"}>
          <a>Click me to redirect</a>
        </Link>
    </div>
    );
}
