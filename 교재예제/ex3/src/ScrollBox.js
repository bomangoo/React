import React, { Component } from 'react';

class ScrollBox extends Component {
    scrollTobottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }
    render() {
        const style = {
            width: '500px',
            height: '300px',
            border: '1px solid #333',
            overflow: 'scroll'
        }
        const innerStyle = {
            width: '100%',
            height: '800px',
            background: 'linear-gradient(white, black)',
        }

        return (
            <div
                style={style}
                ref={(ref) => { this.box = ref }}
            >
                <div style={innerStyle}></div>
            </div>
        )
    }
}


export default ScrollBox;