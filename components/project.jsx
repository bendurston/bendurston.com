// Component imports
import Technology from "./technology";
// Headlessui imports
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BiLink } from "react-icons/bi";

export default function Project({
  title,
  description,
  inDevelopment,
  technologies,
  link,
  linkText,
  delayMulti = 0,
}) {
  let delay = 200 * delayMulti + "ms";
  return (
    <Transition
      as={Fragment}
      appear={true}
      show={true}
      enter="transform transition duration-[400ms]"
      enterFrom="opacity-0 scale-50"
      enterTo="opacity-100 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-50"
      className="bg-neutral-100 lg:basis-5/12 basis-1/1 rounded-md lg:m-3 pt-5 pb-10 px-10 mx-4 my-3"
      style={{ transitionDelay: delay }}
    >
      <div>
        <h2 className="flex justify-center font-lato text-xl font-semibold">
          {title}
        </h2>
        <Technology technologies={technologies} />
        <div className="flex justify-center w-full space-x-4 font-lato text-base font-medium">
          <a className="flex flex-row flex-nowrap items-center" href={link}>
            {linkText}
            <BiLink className="self-end" size="20px" />
          </a>

          {inDevelopment && <p className="">In Development</p>}
        </div>
        <div
          className="prose font-ubuntu"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </Transition>
  );
}
