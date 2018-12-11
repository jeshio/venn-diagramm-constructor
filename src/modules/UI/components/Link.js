import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Link extends PureComponent {
  static propTypes = {};

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    Link.tabIndex += 1;
    const { tabIndex } = Link;
    this.state = {
      tabIndex,
    };
  }

  onClick(e) {
    const {
      noRouter, href, history, onClickHref, isBackLink, onClick, blank,
    } = this.props;
    const { router } = this.context;

    if (!blank) {
      if (isBackLink) {
        e.preventDefault();
        const { pathname } = window.location;

        const regexp = new RegExp(/\/modal\/.*/);

        // if it's modal
        if (pathname.match(regexp)) {
          // close it
          const url = pathname.replace(regexp, '');
          router.history.push(url);
        } else {
          router.history.goBack();
        }
      } else if (onClickHref.length > 0) {
        e.preventDefault();
        history.push(onClickHref);
      } else if (noRouter !== true) {
        e.preventDefault();
        history.push(href);
      }
    }

    if (onClick !== false) {
      onClick();
    }
  }

  render() {
    const {
      staticContext,
      noRouter,
      children,
      blank,
      onClickHref,
      isBackLink,
      ...props
    } = this.props;
    const { tabIndex } = this.state;
    return (
      <a
        {...props}
        role="link"
        tabIndex={tabIndex}
        onClick={this.onClick}
        onKeyPress={this.onClick}
        target={blank ? '_blank' : '_self'}
      >
        {children}
      </a>
    );
  }
}

Link.tabIndex = 0;

Link.propTypes = {
  // использовать стандартную ссылку, вместо роутера
  noRouter: PropTypes.bool,
  blank: PropTypes.bool,
  // при нажатии левой кнопкой мыши
  onClickHref: PropTypes.string,
  isBackLink: PropTypes.bool,
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

Link.defaultProps = {
  noRouter: false,
  blank: false,
  isBackLink: false,
  onClickHref: '',
  onClick: false,
};

Link.contextTypes = {
  router: PropTypes.shape({}).isRequired,
};

export default withRouter(Link);
