import Link from "next/link";

export default function NavLink(props) {
  let { href, text, ...rest } = props;
  return (
    <Link href={href} passHref>
      <a {...rest}>{text}</a>
    </Link>
  );
}
