import s from './Button.module.css'

interface ButtonProps {
    type?: "button" | "submit"
    text?: string
    disabled?: boolean
    size?: "small" | "medium" | "large"
    color?: string
}

function Button(props: ButtonProps) {

    const swithStyleSize = () => {
        switch (props.size) {
            case "small":
                return s.Small

            case "medium":
                return s.Medium

            case "large":
                return s.Large

            default:
                return s.Medium
        }
    }

    const swithStyleActivity = () => !props.disabled ? s.Disabled : s.Enabled

    return (
        <div
            style={!props.disabled ? {color: '#878992'} : props.color ? { color: props.color } : { color: 'white' }}
            className={`${s.Button} ${swithStyleSize()} ${swithStyleActivity()}`
            }>
            {props.text}
        </div>
    )
}

export default Button