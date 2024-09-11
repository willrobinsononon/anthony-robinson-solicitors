import * as React from "react"
//import Caret from "./caret"
import { Link } from "gatsby"


export default function NavItemGroup({ name, navItems }) {
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
      const wrapper = document.querySelector(
        `[data-id="${name}-group-wrapper"]`
      )
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
        <div>
          {name}
        </div>
      </button>
      {isOpen && (
        <div
          data-id={`${name}-popup-box`}
          className={`${isOpen ? "open" : "closed"} sm:absolute`}
        >
          <ul className="flex flex-col">
            {navItems.map((navItem) => (
              <li key={navItem.id}>
                <Link to={navItem.href}>
                  {navItem.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
