import classNames from 'classnames';
import React, { Component } from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import './InputBanner.scss';

class InputBanner extends Component {
  state = {
    active: true,
  }

  componentDidMount () {

    if (this.props.contentType === 'text') this.closeInputBanner(3000);
    // if (this.props.bannersPayload.contentType === 'text') this.closeInputBanner(3000);
  }

  closeInputBanner = (delay = 0) => {
    setTimeout(() => {
      this.setState({ active: false });
      setTimeout(() => { this.props.closeInputBanner(); }, 1000);
    }, delay);

    if (this.props.uploadError) {
      this.props.triggerUploadError(false);
      if (this.props.uploadFiles.length < 1) {
        this.props.toggleUploadReady(false);
      }
    }
  }

  invokeBannerAction = () => {
    this.props.tellAmelia(`run the workflow ${this.props.action}`);
  }

  renderInputBanner () {
    const { contentType, inputBannerType, text, action, actionText } = this.props;
    const isActionBanner = action;
    const dissmiss = contentType === 'textDismiss';

    return (
      <div
        className={classNames('input-banner', inputBannerType, { 'multi-line': isActionBanner })}
        onClick={isActionBanner && this.closeInputBanner}
      >
        <div className="input-banner-content">
          <span>{text}</span>
          {dissmiss || action ? this.renderDismiss() : null}
        </div>
        <div>
          {action ? this.renderAction(actionText) : null}
        </div>
      </div>
    );
  }

  renderDismiss () {
    return <article onClick={this.closeInputBanner} />;
  }

  renderAction (actionText) {
    return <small onClick={this.invokeBannerAction}>{actionText}</small>;
  }

  render () {
    return (
      <CSSTransitionGroup
        transitionName="tooltipSlide"
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}
      >
        { this.state.active ? this.renderInputBanner() : null }
      </CSSTransitionGroup>
    );
  }
}

InputBanner.propTypes = {
  field: PropTypes.object,
  formChanges: PropTypes.func,
  multi: PropTypes.bool
};

export default InputBanner;
