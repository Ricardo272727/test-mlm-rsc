import PropTypes from 'prop-types'
import "./PageContent.scss"

export const PageContent = ({ children = null }) => {
  return <div className="page-content">{children}</div>;
};

PageContent.propTypes = {
    children: PropTypes.node,
}


