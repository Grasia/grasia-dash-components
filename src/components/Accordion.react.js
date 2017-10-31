// import R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import '!style!css!./accordion.css'; // eslint-disable-line

/**
 * Accordion is a component to show/hide a set of components
 * I takes an optional id, the label of the accordion, whether it's collapsed
 * or not, plus other custom classNames.
 * The components to show/hide should be in children
 */
 export default class Accordion extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      collapsed: props.defaultCollapsed
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
      const {
        collapsed = this.state.collapsed,
        className = '',
        id,
        itemClassName = '',
        buttonClassName = '',
        childrenClassName = '',
        label,
        children,
        ...rest
      } = this.props;

    let arrowClassName = 'tree-view_arrow';
    let containerClassName = 'tree-view_children';
    if (collapsed) {
      arrowClassName += ' tree-view_arrow-collapsed';
      containerClassName += ' tree-view_children-collapsed';
    }

    const nodeLabel = (
        <span>
          {label}
        </span>
    )

    const arrow = (
      <div
        {...rest}
        className={buttonClassName + ' ' + arrowClassName}
        onClick={this.handleClick}
      />
    );

    return (
        <div id={id} className={'tree-view ' + className}>
          <div className={'tree-view_item ' + itemClassName} onClick={this.handleClick}>
            {nodeLabel}
            {arrow}
          </div>
          <div className={containerClassName + ' ' + childrenClassName}>
            {collapsed ? null : children}
          </div>
        </div>
    );
  }
}

Accordion.propTypes = {

    /**
    * The components to wrap in the accordion.
    */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),

    /**
    * A header label for the accordion.
    */
    label: PropTypes.string.isRequired,

    /**
     * The initial collapsed state for the accordion.
     */
    defaultCollapsed: PropTypes.bool,

    /**
    * Whether the accordion is collapsed or not for a controlled component.
    *   (use only if you want to control this component externally)
    */
    collapsed: PropTypes.bool,

    /**
    * The ID used to identify this component in Dash callbacks
    */
    id: PropTypes.string,


    /**
     * className for this component
    */
    className: PropTypes.string,

    /**
     * className for the 'arrow', toggle button
    */
    buttonClassName: PropTypes.string,

    /**
     * className for the header of the accordion
    */
    itemClassName: PropTypes.string,

    /**
    * className for the container of the accordion wrapped components
    */
    childrenClassName: PropTypes.string,

    /**
     * Style objecto to override default style
    */
    style: PropTypes.object,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
}
