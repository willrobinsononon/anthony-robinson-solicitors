import * as React from "react"
import Caret from "./ui/caret"
import { Link } from "gatsby"



export default function NavItemGroup({ className, name, navItems, subGroup = false }) {
  const [isOpen, setIsOpen] = React.useState(false)

  const onGroupButtonClick = React.useCallback(() => {
    if (!isOpen) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [isOpen])

  React.useEffect(() => {
    // hide menu when clicked outside
    const handleClickOutside = (event) => {
      const wrapper = document.querySelector(`[data-id="${name}-group-wrapper"]`)
      if (
        isOpen &&
        wrapper &&
        !wrapper.contains(event.target)
      ) {
        onGroupButtonClick()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [name, isOpen, onGroupButtonClick])

  return (
    <div
      data-id={`${name}-group-wrapper`}
    >
      <button
        onClick={onGroupButtonClick}
      >
        <div className={`flex items-center hover:text-ar-b-grey ${className}`}>
          <span className="mr-1 sm:mr-2">{name}</span>
          <Caret className="h-3 sm:h-5 w-3 sm:w-5" svgclassName="fill-ar-blue" isOpen={isOpen}/>
        </div>
      </button>
        <div
          data-id={`${name}-popup-box`}
          className={`${isOpen ? "visible ease-out" : "collapse max-h-0 ease-in"} ${subGroup ? "" : "lg:absolute lg:shadow-md"} bg-white rounded-sm shadow-none w-auto px-5 transition-all duration-200 -z-10`}
        >
          <ul className={`${isOpen ? "opacity-100 ease-in" : "opacity-0 ease-out"} flex flex-col transition-all duration-200`}>
            {navItems.map((navItem) => (
              <li key={navItem.id} className="py-1">
                {navItem.navItemType === "NavItemGroup" ? (
                  <NavItemGroup
                    name={navItem.name}
                    navItems={navItem.navItems}
                    className="py-1"
                    subGroup = {true}
                  />
                ) : (
                  <Link className="text-ar-blue hover:text-ar-b-grey" to={navItem.href}>
                    {navItem.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}
