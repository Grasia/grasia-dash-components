import React, {Component, PropTypes} from 'react';

export default class CollapsableCheckbox extends Component {

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

CollapsableCheckbox.propTypes = {
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

CollapsableCheckbox.defaultProps = {
    initiallyCollapsed: false,
    alwaysExpanded: false
}
