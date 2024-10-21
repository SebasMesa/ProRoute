import { IconType } from "react-icons"

export type Props = {
    text: string
    className?: string
}

export type PropsLink = Props & { 
    link?: string
    typeOfLink?: string
}

export type CardProps = {
    title: string
    icono?: IconType
    descripcion: string
}

export type UserData = {
    name: string
    email: string
    gender: string
}

export type UndrawSVGProps = {
    color?: string;
    size?: number | string;
    style?: React.CSSProperties;
  };

// export type MarqueeProps {
//     descri:
// }