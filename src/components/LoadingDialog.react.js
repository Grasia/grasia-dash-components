import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '!style!css!./dialog.css'; // eslint-disable-line

/**
 * LoadingDialog is dialog that prompts and block the user interface
 * It shows a fancy loading icon as well as some optional desctiptive text.
 */
export default class LoadingDialog extends Component {
    render() {
        const {id, text} = this.props;

        return (
            <div className="dialog-component">
                <div className="cover"></div>
                <div id={id} className="dialog">
                    <p>Loading... {text}</p>

                    <div className="loader"></div>

                    <p>Please wait.</p>
                </div>
            </div>
        );
    }
}

LoadingDialog.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * A descriptive text of what is being loaded
     */
    text: PropTypes.string,

    /**
     * Show or hide this dialog
     */
    show: PropTypes.bool,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};
