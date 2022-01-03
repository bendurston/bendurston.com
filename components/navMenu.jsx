import { Menu, Transition } from '@headlessui/react'
import { useState } from 'react'

// Import Components
import NavLink from './navLink'

// Import Icons
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

export default function NavMenu() {
  let [ isShow, setIsShow ] = useState(false)

  return (
      <div>
      <Menu as="div" className="bg-yellow-600">
        {({ open }) => (
          <>
              <Menu.Button>
                {open ? (
                  <AiOutlineClose className={`animate-flippyDo`} onClick={() => !isShow && setIsShow(true)}/>
                ) : (
                  <FiMenu className={isShow && "animate-flippyUndo"}/>                  
                  )
                }
              </Menu.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items as="ul" className="bg-red-600">
                  <Menu.Item as="li">
                    <NavLink href="/" text="Home" />
                  </Menu.Item>
                  <Menu.Item as="li">
                    <NavLink href="/about" text="About" />
                  </Menu.Item>
                  <Menu.Item as="li">
                    <NavLink href="/projects" text="Projects" />
                  </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>

    </div>
  )
}