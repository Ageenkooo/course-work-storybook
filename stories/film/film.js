import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

// import Img from 'react-image';
// import imgage from './sofa.png';
import './film.css';

const Div = styled.div `
    &.film-wrapper {
        
        z-index: 1;
        transition: 0.6s;
    }
    &.wrapper {
        margin:1.7vw;
        perspective: 1000;
        transition: 0.6s;
        cursor: pointer;
        > Div {
            height: 23vw;
	        width: 15vw;
            transition: 0.6s;
            transform-style: preserve-3d;
        }
    }
    &.opened {
        transform: rotateY(180deg) scale(2);
        margin-top: 50%;
        position: absolute;
        margin-left: 50%;
        
    }
    &.film{
        z-index: 2;
        backface-visibility: hidden;
        top: 0;
        left: 0;
        border: 0.5px solid white;
        height: 23vw;
	    width: 15vw;
        background-size: 100% 100%;
	    padding-top: 0.5vw ;
	    color: white;
	    font-size: 0.9vw;
        display: flex;
        flex-direction: column;
        justify-content:flex-end;
        overflow: hidden;
        box-shadow: 10px 11px 25px -4px rgba(0,0,0,0.75);
	}

    &.poster{
	    height: 75%;
	    width: 100%;
	    border-radius: 5px;
	    background-color: white;
	    background-size: auto 100% ;
	    background-position: 20% 0;
	    transition: all 0.5s ease;
	}	
`;
const P = styled.p `
    padding: 1vw 0.5vw;
    background-color: #2f3c5e;
    border-left: 0.5px solid white;
    border-right: 0.5px solid white;
    text-align: center;
`;

class Film extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
        this.getPos = this.getPos.bind(this);
    }

    getPos() {
        let top = document.getElementsByClassName(this.props.src)[0].getBoundingClientRect().top;
        let left = document.getElementsByClassName(this.props.src)[0].getBoundingClientRect().left;
        let modal = document.getElementsByClassName(this.props.src)[1].querySelector(".rodal-dialog");
        modal.style.top = top+"px";
        modal.style.left = left+"px";
        modal.style.bottom = "auto";
        modal.style.right = "auto";
            var style = document.createElement('style');
            style.type = 'text/css';
            var keyFrames = '\
            @-webkit-keyframes loader {\
                0% {\
                    top: top_DYNAMIC_VALUE;\
                    bottom: bottom_DYNAMIC_VALUE;\
                    right: right_DYNAMIC_VALUE;\
                    left: left_DYNAMIC_VALUE;\
                }\
                100% {\
                    top: 0;\
                    bottom: 0;\
                    right: 0;\
                    left: 0;\
                }\
            }\
            @-moz-keyframes loader {\
                0% {\
                    top: top_DYNAMIC_VALUE;\
                    bottom: bottom_DYNAMIC_VALUE;\
                    right: right_DYNAMIC_VALUE;\
                    left: left_DYNAMIC_VALUE;\
                }\
                100% {\
                    top: 0;\
                    bottom: 0;\
                    right: 0;\
                    left: 0;\
                }\
            }';
            style.innerHTML = keyFrames.replace(/top_DYNAMIC_VALUE/g, top+"px").replace(/bottom_DYNAMIC_VALUE/g, "0px").replace(/right_DYNAMIC_VALUE/g, "0px").replace(/left_DYNAMIC_VALUE/g, left+"px");
            document.getElementsByTagName('head')[0].appendChild(style);
            document.head.appendChild(style)

    }

    show() {
        this.getPos()
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    render() {
        return (
            <div>
                <Div className={"wrapper"} onClick={this.show.bind(this)} >
                <Div className={this.props.src + " film"} style={{backgroundImage:'url(' + this.props.src + ')'}}>
                    <P>{this.props.name}</P>
                </Div>
            </Div>
            <Rodal visible={this.state.visible} className={this.props.src + " film"} animation="flip" onClose={this.hide.bind(this)}>
                <div>Content</div>
            </Rodal>
            </div>
        )
    }
}

export default Film;
