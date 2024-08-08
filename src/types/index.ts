import { IconType } from "react-icons"

export type Props = {
    text: string
    className?: string
}

export type PropsLink = Props & { 
    link?: string
}

export type CardProps = {
    title: string
    icono?: IconType
    descripcion: string
}

// export type MarqueeProps {
//     descri:
// }