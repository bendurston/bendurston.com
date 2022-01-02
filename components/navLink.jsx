import Link from 'next/link'

export default function NavLink({ href, text}) {
    return (
        <Link href={href} passHref>
            <a>{text}</a>
        </Link>
    )
}