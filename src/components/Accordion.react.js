// import R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import '!style!css!./accordion.css'; // eslint-disable-line

class TreeView extends React.PureComponent {

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
        itemClassName = '',
        treeViewClassName = '',
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
        className={className + ' ' + arrowClassName}
        onClick={this.handleClick}
      />
    );

    return (
        <div className={'tree-view ' + treeViewClassName}>
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

TreeView.PropTypes = {
    collapsed: PropTypes.bool,
    defaultCollapsed: PropTypes.bool,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    itemClassName: PropTypes.string,
    childrenClassName: PropTypes.string,
    treeViewClassName: PropTypes.string
}

export default TreeView;




/**
 * Accordion is a component to show/hide a set of components
 * I takes an optional id, the label of the accordion, whether it's collapsed
 * or not plus, other custom className
 * The components to show/hide should be inside children
 */

// export default class Accordion extends Component {
//
//     constructor(props) {
//       super(props);
//       this.state = {
//         collapsed: props.defaultCollapsed
//       };
//       this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick(...args) {
//       this.setState({ collapsed: !this.state.collapsed });
//     }
//
//     render() {
//         const {id, label, collapsed} = this.props;
//
//         const defaultStyle = {
//             width: '240px'
//         }
//
//         const style = R.merge(defaultStyle, this.props.style)
//
//         const nodeLabel = (
//             <span onClick={this.handleClick}>
//               {label}
//             </span>;
//         )
//
//         const toggleButton = (
//           <div
//             className={className + ' ' + toggleButtonClassName}
//             onClick={this.handleClick}
//           />
//         );
//
//         return (
//           <div className={'accordion'}>
//             <div className={'accordion-header-container'}>
//               {nodeLabel}
//               {toggleButton}
//             </div>
//             <div className={containerClassName + ' ' + childrenClassName}>
//               {collapsed ? null : children}
//             </div>
//           </div>
//         );
//     }
// }
//
// Accordion.propTypes = {
//     /**
//      * The ID used to identify this component in Dash callbacks
//      */
//     id: PropTypes.string,
//
//     /**
//      * A label to be printed in the top of the accordion
//      */
//     label: PropTypes.string,
//
//     propTypes: {
//       collapsed: PropTypes.bool,
//       defaultCollapsed: PropTypes.bool,
//       nodeLabel: PropTypes.node.isRequired,
//       className: PropTypes.string,
//       itemClassName: PropTypes.string,
//       childrenClassName: PropTypes.string,
//       treeViewClassName: PropTypes.string,
//     }
//
//     /**
//      * Style objecto to override default style
//      */
//     style: PropTypes.object,
//
//     /**
//      * Dash-assigned callback that should be called whenever any of the
//      * properties change
//      */
//     setProps: PropTypes.func
// };
