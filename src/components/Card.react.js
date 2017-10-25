import R from 'ramda';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Card is a component to display an image alongside some information.
 * I takes an img url, a list of items of text + number or just text,
 *  a description and an url link.
 * It renders a component that show all that info structured and beautified.
 */
export default class Card extends Component {
    render() {
        const {id, img, description, url, data} = this.props;

        const defaultStyle = {
            width: '240px'
        }

        const style = R.merge(defaultStyle, this.props.style)

        const imgContainerStyle = {
            display: 'flex',
            height: '90px',
            width: '100%',
            backgroundColor: '#FFFFFF'
        };

        const dataContainerStyle = {
            display: 'flex',
            justifyContent: 'space-between'
        }

        return (
            <div id={id} style={style}>
                <div id={`${id}-img-container`} style={imgContainerStyle} >
                    <img src={img} style={{height: '72px', width: '80px', margin: 'auto'}}/>
                </div>
                <div id={`${id}-data-items`}>
                    {data.map((item, index) => {
                    return (
                        <div id={`${id}-data-item-${index}`} style={dataContainerStyle}>
                            <span>{item.label}</span>
                            <span style={{fontWeight: 'bold'}}>{item.data}</span>
                        </div>
                    );
                })}
                </div>
                <p id={`${id}-description`}>{description}</p>
                <div id={`${id}-url`} style={{textAlign: 'center'}}>
                    <a href={url}>{url}</a>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    /**
     * The ID used to identify this compnent in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * The img source for the card
     */
    img: PropTypes.string,

    /**
     * An array of data items to list
     */
    data: PropTypes.arrayOf(PropTypes.shape({
        /**
         * The item's label
         */
        label: PropTypes.string,

        /**
         * The items's data to display (usually a number)
         */
        data: PropTypes.string
    })),


    /**
     * An url to link to
     */
    url: PropTypes.string,

    /**
     * A description of the card content
     */
    description: PropTypes.string,

    /**
     * Style objecto to override default style
     */
    style: PropTypes.object,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};
