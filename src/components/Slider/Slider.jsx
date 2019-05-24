import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { pictureConstants } from '../../constants/constants';

const pictureItems = [
    {
        url: '../../../images/pic1.jpg',
    },
    {
        url: '../../../images/pic2.jpg'
    },
    {
        url: '../../../images/pic3.jpg'
    },
    {
        url: '../../../images/pic1.jpg',
    },
    {
        url: '../../../images/pic2.jpg'
    },
    {
        url: '../../../images/pic3.jpg'
    },
];

const SliderLayout = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    border: 1px solid black;
    width: 100%;
    height: 700px;
`;

const PictureContainer = styled.div`
    border: 3px solid black;
    background-image:

    width: 700px;
    overflow: hidden;
`;

const Gutter = styled.div`
    display: flex;
    align-items: center;
    width: 700px;
    height: 700px;
    position: relative;
    left: ${props => props.position}px;
    top: 0px;

    overflow: none;
    background-color: #FDFDFD;
`;

const StyledPicture = styled.div`
    min-width: 400px;
    height: 400px;
    margin: 40px;
    background-image: url(${props => props.url});
    background-size: 100% 100%;
    border-radius: 20px;
`;

const ButtonContainer = styled.div`
    width: 10%;
    display: flex;
    align-items: center;
`;

const PagingButton = styled.div`
    width: 100%;
    height: 50px;
    border: 1px solid black;
    cursor: pointer;
`;

const DisplayOptionBar = styled.div`
    border: 1px solid black;    
`;

//todo slider limit logic
//todo add 'selected' picture, and resize it
//todo fluid motion 

const Picture = props => <StyledPicture url={props.url} />;

export default class Slider extends Component {

    state = {
        position: 0,
    }

    moveLeft = () => {
        // console.log('move left');
        let delta = this.state.position - 400;
        this.setState({
            position: delta
        });

    }

    moveRight = () => {
        console.log('move right');
        let delta = this.state.position + 400;

        this.setState({
            position: delta
        });
    }
    


    render() {
        //todo create an element array with styled components
        const items = pictureItems.map((item, index) => <Picture key={index} url={item.url} />);
        // console.table(items);
        console.log(this.state);
        console.log(this.props);
        console.log(this.props.children);

            
        return (
            <SliderLayout>
                <ButtonContainer>
                    <PagingButton onClick={this.moveLeft}></PagingButton>
                </ButtonContainer>
                <PictureContainer>
                    <Gutter position={this.state.position}>
                        {items}
                    </Gutter>
                </PictureContainer>
                <ButtonContainer>
                    <PagingButton onClick={this.moveRight}></PagingButton>
                </ButtonContainer>
            </SliderLayout>
        );
    }
}

Slider.propTypes = {
    str: PropTypes.string,
    obj: PropTypes.object,
    num: PropTypes.number
};