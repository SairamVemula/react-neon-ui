import React from 'react';
import styles from './index.module.css';
import colors from '../../themes/colors';

interface AProps {
    children?: React.ReactNode,
    text?: string,
    color?: 'Red' | 'Orange' | 'Carrot' | 'Lemon' | 'Lime' | 'Blue' | 'Green' | 'Magenta' | { primary: string },
    underline?: boolean
    style?: React.CSSProperties,
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const A: React.FC<AProps> = (props) => {
    const { text, color, style, underline, onClick } = props
    const [hover, setHover] = React.useState(false);
    // const [loading, setLoading] = React.useState(false);
    const btnColor = {
        primary: color ? typeof color == 'string' ? colors[color].primary : color.primary : colors['Blue'].primary
    }
    return (
        <a className={`${styles.a}`}
            style={!hover ? { color: btnColor.primary, borderColor: btnColor.primary, ...style } : {
                color: btnColor.primary,
                textShadow: `0 0 15px ${btnColor.primary}`, textDecoration: underline ? 'underline' : 'none',
                ...style
            }}
            onMouseLeave={() => setHover(false)}
            onMouseEnter={() => setHover(true)}
            onClick={onClick}
        >{text || 'Text Here'}</a>
    )

}

export default A;

