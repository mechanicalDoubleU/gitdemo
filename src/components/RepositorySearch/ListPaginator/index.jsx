import React from 'react';
import PropTypes, { oneOf } from 'prop-types';

import PaginationElement from './PaginationElement';

import './style.scss';

function Component({ pagination, params }) {
  return (
    <nav className="paginator">
      {pagination.map(
        (item) => (
          <PaginationElement
            key={item.key}
            data={item}
            params={params}
          />
        ),
      )}
    </nav>
  );
}

// Component.defaultProps = {
//   pagination: [],
//   params: {},
// };

// Component.propTypes = {
//   pagination: PropTypes.isRequired.arrayOf(
//     PropTypes.shape({
//       key: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
//       elipsis: PropTypes.bool,
//       page: PropTypes.number,
//       current: PropTypes.bool,
//       sequential: PropTypes.string,
//     }),
//   ),
//   params: PropTypes.isRequired.shape({
//     p: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
//     q: PropTypes.string,
//   }),
// };

export default Component;
