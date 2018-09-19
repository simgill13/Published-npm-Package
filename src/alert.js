// import classNames from 'classnames';
// import React, { Component } from 'react';
// import { Icon } from 'semantic-ui-react';
// import CSSTransitionGroup from 'react-addons-css-transition-group';
// import PropTypes from 'prop-types';
// import './Alert.scss';

// class Alert extends React.Component {
//     state = {
//         active: true,
//     };

//     componentDidMount() {
//         if (this.props.data.alertType === 'text') this.closeAlert(3000);
//     }

//     closeAlert = (delay = 0) => {
//         setTimeout(() => {
//             this.setState({ active: false });
//         }, delay);
//     };

//     invokeBannerAction = () => {
//         const { sessionId, sessionMode } = this.props;

//         this.props.sendUserInput({
//             messageText: `run the workflow ${this.props.data.action}`,
//             sessionId,
//             sessionMode,
//         });
//     };

//     renderAlert() {
//         const { alertType, alertName, message } = this.props.data;
//         const isMultiLine = alertType === 'textMulti';
//         return (

//             <div
//               role="presentation"
//               className={classNames('input-banner', alertName, { 'multi-line': isMultiLine })}
//               onClick={this.closeAlert}
//             >

//                 <p>{message}</p>
//                 {this.renderTypeSpecificContent()}
//             </div>
//         );
//     }

//     renderTypeSpecificContent = () => {
//         const { alertType, actionName } = this.props.data;

//         switch (alertType) {
//             case 'textDismiss':
//                 return <Icon name="close" />;

//             case 'textAction':
//                 return <small role="presentation" onClick={this.invokeBannerAction}>{actionName}</small>;

//             case 'textMulti':
//                 return <small role="presentation" className="banner-multi" onClick={this.invokeBannerAction}>{actionName}</small>;

//             default:
//                 return null;
//         }
//     };

//     render() {
//         return (
//             <CSSTransitionGroup
//               transitionName="tooltipSlide"
//               transitionEnterTimeout={600}
//               transitionLeaveTimeout={600}
//               component="div"
//               className="alert-message"
//             >

//                 { this.state.active ? this.renderAlert() : null }
//             </CSSTransitionGroup>
//         );
//     }
// }


// export default Alert;