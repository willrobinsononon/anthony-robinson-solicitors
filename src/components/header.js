import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import NavItemGroup from "./nav-item-group"
import Hamburger from "./ui/hamburger"

export default function Header() {

  const navItems = [
    {
      id: 0,
      navItemType: "NavItem",
      href: "/",
      text: "link 1",
      description: "link description",
    },
    {
      id: 1,
      navItemType: "NavItemGroup",
      name: "group 1",
      navItems: [
        {
          id: 0,
          navItemType: "NavItem",
          href: "/",
          text: "link 1",
        },
        {
          id: 1,
          navItemType: "NavItem",
          href: "/",
          text: "link 2",
        },
        {
          id: 2,
          navItemType: "NavItem",
          href: "/",
          text: "link 3",
        },
      ]
    },
    {
      id: 2,
      navItemType: "NavItem",
      href: "/",
      text: "link 2",
      description: "link description",
    },
    {
      id: 3,
      navItemType: "NavItemGroup",
      name: "group 2",
      navItems: [
        {
          id: 0,
          navItemType: "NavItem",
          href: "/",
          text: "link 1",
        },
        {
          id: 1,
          navItemType: "NavItem",
          href: "/",
          text: "link 2",
        },
        {
          id: 2,
          navItemType: "NavItem",
          href: "/",
          text: "link 3",
        },
      ]
    },
  ]

  const [isOpen, setIsOpen] = React.useState(false)

  const menuClick = React.useCallback(() => {
    const openAnimate = document.querySelector('#top-nav-hamburger #start')
    const closeAnimate = document.querySelector('#top-nav-hamburger #reverse')
    if (!isOpen) {
      setIsOpen(true)
      openAnimate.beginElement()
    } else {
      setIsOpen(false)
      closeAnimate.beginElement()
    }
  }, [isOpen])
  
  React.useEffect(() => {
    // hide menu when clicked outside
    const handleClickOutside = (event) => {
      const nav = document.querySelector('.top-nav')
      const button = document.querySelector('.top-nav-button')
      if (
        isOpen &&
        nav &&
        !nav.contains(event.target) &&
        !button.contains(event.target)
      ) {
        menuClick()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, menuClick])

  return (
    <header className = "px-5 sm:flex sm:justify-between sm:items-center sticky">
      <div className="flex items-center justify-between">
        <Link
            to="/"
          >
            <StaticImage 
              alt="company logo" 
              src="../images/logo.png"
              className="w-24"
            />
        </Link>
        <button onClick={menuClick} className="block sm:hidden top-nav-button">
          <Hamburger width="10" height="10" id={"top-nav-hamburger"}/>
        </button>
      </div>
      <nav className={`${isOpen? "block" : "hidden"} sm:block sm:grow sm:h-min top-nav`}>
        <ul className="flex flex-col sm:flex-row sm:justify-evenly">
          {navItems && navItems.map((navItem) => (
            <li key={navItem.id}>
              {navItem.navItemType === "NavItemGroup" ? (
                <NavItemGroup
                  name={navItem.name}
                  navItems={navItem.navItems}
                />
              ) : (
                <Link to={navItem.href}>{navItem.text}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
