import React from 'react';
import styles from './index.module.css';
import colors from '../../themes/colors'

interface TextProps {
    children?: React.ReactNode,
    text?: string,
    color?: 'Red' | 'Orange' | 'Carrot' | 'Lemon' | 'Lime' | 'Blue' | 'Green' | 'Magenta' | { primary: string, secondary: string },
    background?: 'none' | 'fill' | 'outlined',
    style?: React.CSSProperties,
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const Button: React.FC<TextProps> = (props) => {
    const { text, color, style, onClick } = props
    const [hover, setHover] = React.useState(false);
    // const [loading, setLoading] = React.useState(true);
    const btnColor = {
        primary: color ? typeof color == 'string' ? colors[color].primary : color.primary : colors['Blue'].primary,
        secondary: color ? typeof color == 'string' ? colors[color].secondary : color.secondary : colors['Blue'].secondary
    }
    const background = props.background == 'fill' ? { background: btnColor.primary, color: btnColor.secondary } : props.background == 'outlined' ? { border: `solid 2px ${btnColor.primary}` } : {}
    return (
        <a className={`${styles.a}`}
            style={!hover ? { color: btnColor.primary, ...background, ...style } : {
                color: btnColor.secondary,
                background: `${btnColor.primary}`,
                boxShadow: `0 0 10px ${btnColor.primary}, 0 0 40px ${btnColor.primary}, 0 0 80px ${btnColor.primary}`,
                border: props.background == 'outlined' ? `solid 2px ${btnColor.secondary}` : 'none',
                ...style
            }}
            onMouseLeave={() => setHover(false)}
            onMouseEnter={() => setHover(true)}
            onClick={onClick}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {text || 'Click Me'}
        </a>
    )

}

export default Button;