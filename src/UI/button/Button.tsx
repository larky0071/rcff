import s from './Button.module.css'

interface ButtonProps {
    type?: "default" | "primary" | "submit"
    size?: "small" | "normal" | "large"
    disable?: boolean
    children?: React.ReactNode
}

export function Button({ type, size, disable, children }: ButtonProps) {

    const typeStyle = () => {
        if (!type || type === "default") return s.default
        if (type === "primary") return s.primary
        if (type === "submit") return s.submit
    }

    const sizeStyle = () => {
        if (!size || size === "normal") return s.normal
        if (size === "small") return s.small
        if (size === "large") return s.large
    }

    const ActivityStyle = () => {
        if (disable === false) return s.enable
        if (disable === true) return s.disable
    }

    return <button className={`${typeStyle()} ${sizeStyle()} ${ActivityStyle()}`}>
        {children}
    </button>
}