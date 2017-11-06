import {append, contains, merge, without} from 'ramda';
import React, {Component, PropTypes} from 'react';

class Checkbox extends Component {

    constructor(props) {
        super(props);

        this.collapsable = props.children && !props.alwaysExpanded;
        if (this.collapsable) {
            this.state = {
                collapsed: props.initiallyCollapsed
            };
            this.handleCollapseClick = this.handleCollapseClick.bind(this);
        }
      }

    handleCollapseClick() {
        this.setState({ collapsed: !this.state.collapsed });
    }

    render() {

        const {
            children,
            disabled,
            inputClassName,
            inputStyle,
            isChecked,
            label,
            labelClassName,
            labelStyle,
            value
        } = this.props;

        const collapsable = this.collapsable;

        let arrow;
        let CollapsableChildren;

        if (collapsable) {
            const collapsed = this.state.collapsed;
            arrow = (
                <div
                    onClick={this.handleCollapseClick}
                    style={{cursor: 'pointer', marginLeft: '12px'}}
                    >
                    {collapsed? '▾' : '▴'}
                </div>
            );

            CollapsableChildren = (
                <div>
                    {collapsed ? null : children}
                </div>
            );
        }

        return (
            <div>
                <div style={{display: 'flex'}}>
                    <label
                        style={labelStyle}
                        className={labelClassName}
                    >
                        <input
                            checked={isChecked}
                            className={inputClassName}
                            disabled={Boolean(disabled)}
                            style={inputStyle}
                            type="checkbox"
                            onChange={() => this.props.handleOnChange(value)}
                        />
                        {label}
                    </label>
                    {collapsable? arrow : null}
                    </div>

                {collapsable? CollapsableChildren : children}
            </div>
        );
        }
}

Checkbox.propTypes = {
    /**
     * The checkbox's label
     */
    label: PropTypes.string,

    /**
     * The value of the checkbox. This value
     * corresponds to the items specified in the
     * `values` property.
     */
    value: PropTypes.string,

    /**
     * If true, this checkbox is disabled and can't be clicked on.
     */
    disabled: PropTypes.bool,


    /**
     * Optinal wrapped components within this option
     */
    children: PropTypes.node,

    /**
     * If set, children are always expanded and there's no way to collapse them
     */
     alwaysExpanded: PropTypes.bool,

     /**
      * Show chidlren of this checkbox to be initially collapsed (default is expanded)
      */
     initiallyCollapsed: PropTypes.bool,

     /**
      * Mark if the input is checked or not
      */
     checked: PropTypes.bool,

     /**
      * Callback to the parent to add or remove this option from the Checklist
      */
     handleOnChange: PropTypes.func
}

Checkbox.defaultProps = {
    initiallyCollapsed: false,
    alwaysExpanded: false
}

/**
 * Checklist is a component that encapsulates several checkboxes.
 * The values and labels of the checklist is specified in the `options`
 * property and the checked items are specified with the `values` property.
 * Each checkbox is rendered as an input with a surrounding label.
 */
export default class Checklist extends Component {
    constructor(props) {
        super(props);
        this.state = {values: props.values};

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({values: newProps.values});
    }

    handleOnChange(value) {
        const values = this.state.values;
        let newValues;
        if (contains(value, values)) {
            newValues = without([value], values);
        } else {
            newValues = append(value, values);
        }
        this.setState({values: newValues});

        const {fireEvent, setProps} = this.props;
        if (setProps) setProps({values: newValues});
        if (fireEvent) fireEvent({event: 'change'});
    }

    render() {
        const {
            className,
            id,
            options,
            style,
            values,
            ...rest
        } = this.props;

        let optionProps;
        return (
            <div id={id} style={style} className={className}>
                {options.map(option => {
                    optionProps = merge(rest,option)
                    return(
                        <Checkbox
                            handleOnChange = {this.handleOnChange}
                            checked = {contains(option.value, values)}
                            key = {option.value}
                            {...optionProps}
                            />
                        );
                    }
                )}
            </div>
        );
    }
}

Checklist.propTypes = {
    id: PropTypes.string,

    /**
     * An array of options
     */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * The checkbox's label
             */
            label: PropTypes.string,

            /**
             * The value of the checkbox. This value
             * corresponds to the items specified in the
             * `values` property.
             */
            value: PropTypes.string,

            /**
             * If true, this checkbox is disabled and can't be clicked on.
             */
            disabled: PropTypes.bool,

            /**
             * Optinal wrapped components within this option
             */
             children: PropTypes.oneOfType([
                 PropTypes.arrayOf(PropTypes.node),
                 PropTypes.node
             ]),

            /**
             * If set, children are always expanded and there's no way to collapse them
             */
            alwaysExpanded: PropTypes.bool,

            /**
             * Show chidlren of this checkbox to be initially collapsed (default is expanded)
             */
             initiallyCollapsed: PropTypes.bool

        })
    ),

    /**
     * The currently selected value
     */
    values: PropTypes.arrayOf(PropTypes.string),

    /**
     * The class of the container (div)
     */
    className: PropTypes.string,

    /**
     * The style of the container (div)
     */
    style: PropTypes.object,


    /**
     * The style of the <input> checkbox element
     */
    inputStyle: PropTypes.object,

    /**
     * The class of the <input> checkbox element
     */
    inputClassName: PropTypes.string,

    /**
     * The style of the <label> that wraps the checkbox input
     *  and the option's label
     */
    labelStyle: PropTypes.object,

    /**
     * The class of the <label> that wraps the checkbox input
     *  and the option's label
     */
    labelClassName: PropTypes.string,

    /**
     * Dash-assigned callback that gets fired when the checkbox item gets selected.
     */
    fireEvent: PropTypes.func,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func,

    dashEvents: PropTypes.oneOf(['change'])
};

Checklist.defaultProps = {
    inputStyle: {},
    inputClassName: '',
    labelStyle: {},
    labelClassName: '',
    options: []
};
