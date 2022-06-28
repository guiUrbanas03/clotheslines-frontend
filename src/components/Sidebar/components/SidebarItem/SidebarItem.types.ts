import React from "react"
import { IconType } from "react-icons"

export type SidebarItemProps = {
    icon: React.ReactElement<IconType>,
    text: string
    color?: string
}