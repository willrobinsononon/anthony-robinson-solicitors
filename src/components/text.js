import * as React from "react"

export const Text = ({children, className = "", margin = false}) => {

    return (
        <p className={`leading-relaxed hyphens-auto [overflow-wrap:anywhere] ${margin ? margin : ""} ${className}`}>
            {children}
        </p>
    )
}

export const Bold = ({children, className = "", margin = false}) => {

    return (
        <Text className={`font-bold ${margin ? margin : "mb-2"} ${className}`}>
            {children}
        </Text>
    )
}

export const LargeText = ({children, className = "", margin = false}) => {

  return (
    <Bold className={`text-xl lg:text-2xl ${margin ? margin : "mb-6 lg:mb-12"} ${className}`}>
        {children}
    </Bold>
  )
}

export const Paragraph = ({children, className = "", margin = false}) => {

    return (
        <Text className={`${margin ? margin : "mb-6"} ${className}`}>
            {children}
        </Text>
    )
}

export const ParagraphGap = ({children, className = ""}) => {

    return (
        <Text className={`mb-6 lg:mb-12 ${className}`}>
            {children}
        </Text>
    )
}

export const FinalParagraph = ({children, className = "", margin = false}) => {

    return (
        <Text className={`${margin ? margin : ""} ${className}`}>
            {children}
        </Text>
    )
}

export const List = ({children, className = "", margin = false}) => {

    return (
        <ul className={`list-disc pl-8 ${margin ? margin : "mb-3"} ${className}`}>
            {children}
        </ul>
    )
}

export const ListItem = ({children, className = "", margin = false}) => {

    return (
        <li className={`py-1 ${margin ? margin : ""} ${className}`}>
            {children}
        </li>
    )
}