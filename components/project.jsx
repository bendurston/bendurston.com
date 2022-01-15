//Next imports
import Image from "next/image";
import Link from "next/link";
// Component imports
import Technology from "./technology";

export default function Project({
  title,
  description,
  inDevelopment,
  technologies,
  link,
  linkText
  }) {
  //md:max-w-md max-w-sm 
  return (
    <div className="lg:basis-5/12 basis-1/1 bg-red-100 lg:m-3 p-10 mx-4 my-3">
      <p>{title}</p>
      <Technology technologies={technologies} />
      <p>{inDevelopment}</p>
      <p>{description}</p>
      <a href={link}>{linkText}</a>
    </div>
  );
}
