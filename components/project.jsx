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
  link
  }) {
  
  return (
    <div className="px-5 py-3 rounded-md bg-stone-100">
      <p>{title}</p>
      <Technology technologies={technologies} />
      <p>{inDevelopment}</p>
      <p>{description}</p>
      <a href={link}>click me</a>
    </div>
  );
}
