import React from 'react';
import styles from './index.module.css';
import colors from '../../themes/colors';

interface ButtonProps {
    children?: React.ReactNode,
    text?: string,
    color?: 'Red' | 'Orange' | 'Carrot' | 'Lemon' | 'Lime' | 'Blue' | 'Green' | 'Magenta' | { primary: string },
    style?: React.CSSProperties,
}

const Text: React.FC<ButtonProps> = (props) => {
    const { text, color, style } = props
    const textColor = {
        primary: color ? typeof color == 'string' ? colors[color].primary : color.primary : colors['Blue'].primary
    }
    return (
        <div className={styles.div}>
            {/* <span className={styles.before} style={{ background: textColor.primary }}></span> */}
            <h3
                className={styles.h1}
                style={{
                    color: textColor.primary,
                    textShadow: `0 0 10px ${textColor.primary}`,
                    ...style
                }}
            >
                {text || 'Text Here'}
            </ h3>
            <h3
                className={styles.after}
                style={{ color: textColor.primary, ...style }}
            >{text || 'Text Here'}</h3>
        </div>
    )

}

export default Text;

