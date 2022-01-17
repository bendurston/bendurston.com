import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="flex justify-center items-center space-x-12 mt-8 h-16 w-full bg-neutral-50 rounded-lg">
      <a className="hover:scale-150" href="https://github.com/bendurston/">
        <BsGithub color="#3B82F6" />
      </a>
      <a
        className="hover:scale-150"
        href="https://www.linkedin.com/in/bendurston/"
      >
        <BsLinkedin color="#3B82F6" />
      </a>
    </div>
  );
}
