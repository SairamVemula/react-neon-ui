import React from 'react'
import styles from './index.module.css';
import colors from '../../themes/colors'

interface SelectProps {
    list?: Array<string | number>,
    placeholder?: string,
    color?: 'Red' | 'Orange' | 'Carrot' | 'Lemon' | 'Lime' | 'Blue' | 'Green' | 'Magenta' | { primary: string, secondary: string },
    style?: React.CSSProperties,
    onSelect?: (e: string | object | number) => void,
    background?: string
}
// const arr = ['Sairam', 'Vamshi', 'Rahul', 'Lavanthi', 'Rohit', 'Yuvraj', 'Rajender', 'Pathik', 'Suyog', 'Sanket', 'Sonali', 'Akshay', 'Rajendra'];

class Select extends React.Component<SelectProps, any> {
    sltColor: { primary: string, secondary: string };
    constructor(props: SelectProps) {
        super(props);
        this.sltColor = {
            primary: this.props.color ? typeof this.props.color == 'string' ? colors[this.props.color].primary : this.props.color.primary : colors['Blue'].primary,
            secondary: this.props.color ? typeof this.props.color == 'string' ? colors[this.props.color].secondary : this.props.color.secondary : colors['Blue'].secondary
        }
        this.state = {
            open: false,
            placeholder: this.props.placeholder,
            listStyle: {
                border: `solid 1px ${this.sltColor.primary}`,
                background: this.props.background || '#031321',
                height: 0,
                display: 'none'
            }
        }
    }
    handleClickOutside = (e: Event) => {
        let target = e.target as Element;
        const array = Array.from(target.classList);
        if (array.includes(styles.main) || array.includes(styles.p) || array.includes(styles.svg) || array.includes(styles.list) || array.includes(styles.listItem))
            return
        // console.log(array);
        this.setState({
            open: false,
            listStyle: { ...this.state.listStyle, transition: 'height 2s', height: 0, display: 'none' }
        })
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    // React.useEffect(() => {
    //     console.log('INSIDE USEEFFECT')
    //     document.addEventListener('mousedown', handleClickOutside);
    //     return document.removeEventListener('mousedown', handleClickOutside);
    // }, [document, handleClickOutside])

    onMouseEnter = (e: React.SyntheticEvent): void => {
        const target = e.target as HTMLAnchorElement;
        target.style.color = this.sltColor.secondary;
        target.style.background = this.sltColor.primary;
        target.style.boxShadow = `0 0 10px ${this.sltColor.primary}`;
    };
    onMouseLeave = (e: React.SyntheticEvent): void => {
        const target = e.target as HTMLAnchorElement;
        target.style.color = this.sltColor.primary;
        target.style.background = this.props.background || '#031321';
        target.style.boxShadow = 'none';
    };
    onClick = (): void => {
        if (this.props.list && this.props.list?.length > 0 && this.state.open) {
            this.setState({
                open: !this.state.open,
                listStyle: { ...this.state.listStyle, transition: 'height 2s', height: 0, display: 'none' }
            })
        }
        else if (this.props.list && this.props.list?.length > 0 && !this.state.open) {
            this.setState({
                open: !this.state.open,
                listStyle: { ...this.state.listStyle, transition: 'height 2s', height: 320, display: 'block' }
            })
        }
    };
    onSelect = (selected: string | number): void => {
        this.setState({
            placeholder: selected
        })
        if (this.props.onSelect) this.props.onSelect(selected);
    }
    render() {
        const { background } = this.props;
        return (
            <div className={styles.main} style={{ color: this.sltColor.primary, border: `solid 2px ${this.sltColor.primary} `, background: background || '#031321' }} onClick={this.onClick}>
                <p className={styles.p} >{this.state.placeholder || 'Select from List'}</p>
                <svg className={`${styles.svg} ${this.state.open ? styles.svg1 : styles.svg2}`} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width={"20"} height={"20"} viewBox="0 0 292.362 292.362" style={{ fill: this.sltColor.primary }}>
                    <g>
                        <path className={styles.svg} d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
		C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
		s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/>
                    </g>
                </svg>
                {this.props.list && this.props.list?.length > 0 ?
                    <div className={styles.list} style={this.state.listStyle}>
                        {
                            this.props.list?.map(a => <a className={styles.listItem} style={{ color: this.sltColor.primary, borderColor: this.sltColor.primary }}
                                // arr.map(a => <a className={styles.listItem} style={{ color: this.sltColor.primary, borderColor: this.sltColor.primary }}
                                key={a}
                                onMouseEnter={this.onMouseEnter}
                                onMouseLeave={this.onMouseLeave}
                                onClick={() => this.onSelect(a)}
                            >{a}</a>)
                        }
                    </div> : ''}
            </div >
        )
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

}


export default Select;
