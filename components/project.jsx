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
      className="lg:basis-5/12 basis-1/1 bg-neutral-100 rounded-md lg:m-3 pt-5 pb-10 px-10 mx-4 my-3"
      style={{ transitionDelay: delay}}
    >
      <div className="grid justify-items-center">
        <p className="font-ubuntu text-lg font-medium">{title}</p>
        <Technology technologies={technologies} />
        <div className="flex flex-row flex-nowrap justify-center space-x-4 w-full font-dongle text-2xl">
          <a className="" href={link}>{linkText}</a>
          {inDevelopment && 
            <p className="">In Development</p>
          }
        </div>
        
        <p className="font-dongle text-2xl">{description}</p>
        
      </div>
    </Transition>
  );
}
