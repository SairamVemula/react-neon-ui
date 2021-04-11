import React from 'react';
// import styles from './index.module.css';
import colors from '../../themes/colors';

interface CheckboxProps {
    children?: React.ReactNode,
    label?: string,
    color?: 'Red' | 'Orange' | 'Carrot' | 'Lemon' | 'Lime' | 'Blue' | 'Green' | 'Magenta' | { primary: string },
    checked?: boolean
    style?: React.CSSProperties,
    labelStyle?: React.CSSProperties,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    value?: string | number | readonly string[] | undefined
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const { color, style, checked, onChange, value, label, labelStyle } = props
    const [hover, setHover] = React.useState(false);
    // const [loading, setLoading] = React.useState(false);
    const checkRef = React.useRef<HTMLInputElement>(null);
    const boxColor = {
        primary: color ? typeof color == 'string' ? colors[color].primary : color.primary : colors['Blue'].primary
    }
    const _onClick: React.MouseEventHandler<HTMLDivElement> = () => {
        setHover(!hover)
        checkRef.current?.click();
    }
    return (
        <div onClick={_onClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <input style={{ display: 'none' }} type="" checked={checked} onChange={onChange} value={value} ref={checkRef} />
            <div style={{ height: style?.height ? style.height : 24, width: style?.width ? style.width : 24, border: `solid 2px ${boxColor.primary}` }}>
                <svg xmlns="http://www.w3.org/2000/svg" width={style?.width ? style?.width : "24"} height={style?.height ? style?.height : "24"}
                    style={{ fill: boxColor.primary, boxShadow: `0 0 10px ${boxColor.primary}`, transition: 'display 1s', display: hover ? 'block' : 'none' }}
                    viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm11 17l-5-5.299 1.399-1.43 3.574 3.736 6.572-7.007 1.455 1.403-8 8.597z" /></svg>
            </div> :
            <label style={{ color: boxColor.primary, fontSize: 20, margin: 'auto 15px', ...labelStyle }}>{label || 'Something'}</label>
        </div>
    )

}

export default Checkbox;

