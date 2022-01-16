//Next imports
import Image from "next/image";
import Link from "next/link";
// Component imports
import Technology from "./technology";

import { Transition } from "@headlessui/react";


export default function Project({
  title,
  description,
  inDevelopment,
  technologies,
  link,
  linkText,
  delayMulti
  }) {
    let delay = 200 * delayMulti + "ms";
  return (
    <Transition
      as="div"
      appear={true}
      show={true}
      enter="transform transition duration-[400ms]"
      enterFrom="opacity-0 scale-50"
      enterTo="opacity-100 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 scale-100 "
      leaveTo="opacity-0 scale-95"
      className="lg:basis-5/12 basis-1/1 bg-red-100 lg:m-3 p-10 mx-4 my-3"
      style={{ transitionDelay: delay}}
    >
      <div>
        <p>{title}</p>
        <Technology technologies={technologies} />
        <p>{inDevelopment}</p>
        <p>{description}</p>
        <a href={link}>{linkText}</a>
      </div>
    </Transition>
  );
}
