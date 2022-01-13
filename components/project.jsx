//Next imports
import Image from "next/image";
// Component imports
import Technology from "./technology";

export default function Project({
  title,
  description,
  inDevelopment,
  image,
  technologies,
  }) {
  
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{inDevelopment}</h3>
      <Image
        src={image.url}
        alt={`An image of the project: ${title}`}
        width={30}
        height={30}
      />
      <Technology technologies={technologies} />
    </div>
  );
}
