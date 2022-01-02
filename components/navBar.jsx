import { Menu } from '@headlessui/react'

import NavLink from '../components/navLink'

export default function NavBar() {
  return (
    <div className="bg-yellow-600">
      <Menu>
      <Menu.Button>
        <div>Menu</div>
      </Menu.Button>
      <Menu.Items>
        <div className="bg-red-600">
          <Menu.Item>
            <NavLink href="/" text="Home" />
          </Menu.Item>
          <Menu.Item>
            <NavLink href="/about" text="About" />
          </Menu.Item>
          <Menu.Item>
            <NavLink href="/projects" text="Projects" />
          </Menu.Item>
        </div>
      </Menu.Items>
      </Menu>
    </div>
    
  )
}