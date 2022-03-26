import s from './Button.module.css'

interface ButtonProps {
    type?: "default" | "primary" | "submit"
    size?: "small" | "normal" | "large"
    children: React.ReactNode
}

export function Button({ type, size, children }: ButtonProps) {

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

    return <button className={`${typeStyle()} ${sizeStyle()}`}>
        {children}
    </button>
}