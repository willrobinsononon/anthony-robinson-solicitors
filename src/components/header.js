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
          href: "/about-us",
          text: "About Us",
    },
    {
      id: 1,
      navItemType: "NavItemGroup",
      name: "Employers",
      navItems: [
        {
          id: 0,
          navItemType: "NavItem",
          href: "/employers/how-we-can-help",
          text: "How We Can Help",
        },
        {
          id: 1,
          navItemType: "NavItemGroup",
          name: "Key Issues",
          navItems: [
            {
              id: 0,
              navItemType: "NavItem",
              href: "/employees/employment-contracts",
              text: "Employment Contracts",
            },
            {
              id: 1,
              navItemType: "NavItem",
              href: "/employers/sickness-absence",
              text: "Sickness and Absence",
            },
            {
              id: 2,
              navItemType: "NavItem",
              href: "/employees/redundancy",
              text: "Redundancy",
            },
            {
              id: 3,
              navItemType: "NavItem",
              href: "/employees/transfer-of-undertakings",
              text: "Transfer of Undertakings - TUPE",
            },
            {
              id: 4,
              navItemType: "NavItem",
              href: "/employers/disciplinary-procedures",
              text: "Disciplinary Procedures",
            },
            {
              id: 5,
              navItemType: "NavItem",
              href: "/employers/discrimination-in-the-workplace",
              text: "Discrimination in the Workplace",
            },
          ]
        },
        {
          id: 2,
          navItemType: "NavItem",
          href: "/employers/services",
          text: "Services",
        },
        {
          id: 3,
          navItemType: "NavItem",
          href: "/employers/defense-costs",
          text: "Defense Costs for Dismissal Claims",
        },
      ]
    },
    {
      id: 2,
      navItemType: "NavItemGroup",
      name: "Employees",
      navItems: [
        {
          id: 0,
          navItemType: "NavItem",
          href: "/employees/key-issues",
          text: "Key Issues",
        },
        {
          id: 1,
          navItemType: "NavItem",
          href: "/employees/services",
          text: "Services",
        },
        {
          id: 2,
          navItemType: "NavItem",
          href: "/employees/dismissal-costs",
          text: "Costs for Dismissal Claims",
        },
      ]
    },
    {
      id: 3,
      navItemType: "NavItemGroup",
      name: "Medical",
      navItems: [
        {
          id: 0,
          navItemType: "NavItem",
          href: "/medical/key-issues",
          text: "Key Issues",
        },
        {
          id: 1,
          navItemType: "NavItem",
          href: "/medical/services",
          text: "Services",
        },
      ]
    },
    {
      id: 4,
      navItemType: "NavItem",
      href: "/contact",
      text: "Contact",
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
    <header className = "px-4 sm:px-12 pt-5 pb-4 sticky top-0 z-50 bg-white">
      <div className = "max-w-7xl m-auto lg:flex lg:justify-between">
        <div className="flex justify-between gap-3">
          <Link
              to="/"
              className="flex items-center"
            >
              <StaticImage 
                alt="company logo" 
                src="../images/logo.png"
                className="max-w-80"
              />
          </Link>
          <button onClick={menuClick} className="block lg:hidden top-nav-button" aria-label="open menu">
            <Hamburger className="w-10 sm:w-10 h-10 sm:h-10" svgClassName="cursor-pointer block stroke-ar-blue hover:stroke-ar-b-grey" id={"top-nav-hamburger"}/>
          </button>
        </div>
        <nav className={`${isOpen? "visible opacity-100" : "collapse opacity-0"} flex absolute left-0 w-full justify-end lg:opacity-100 lg:visible lg:static lg:w-fit lg:block lg:grow lg:h-min top-nav transition-all duration-300`}>
          <ul className="flex flex-col bg-white rounded-sm shadow-md lg:shadow-none lg:bg-transparent lg:flex-row lg:justify-end w-60 lg:w-full">
            {navItems && navItems.map((navItem) => (
              <li key={navItem.id} className="text-lg font-semibold font-sans text-ar-blue flex items-center border-b-2 border-b-slate-100">
                {navItem.navItemType === "NavItemGroup" ? (
                  <NavItemGroup
                    name={navItem.name}
                    navItems={navItem.navItems}
                    className="px-5 py-2"
                  />
                ) : (
                  <Link className="px-5 py-2 hover:text-ar-b-grey" to={navItem.href}>{navItem.text}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
