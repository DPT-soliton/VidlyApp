import React from "react";
import _ from "lodash"; /**Use in pagination */
import PropTypes from "prop-types"; /**Use for props type checking */

const Pagination = (props) => {
  const { items_count, page_size, onPageChange, current_page } = props;
  // console.log("Page ", current_page);
  const page_count = Math.ceil(items_count / page_size);
  /**[1...pagesCount] */

  /**Nothing to render */
  if (page_count === 1) return null;

  /**Will create an array of pages */
  const pages = _.range(1, page_count + 1);

  return (
    <nav aria-label="Page navigation example justify-content-center">
      <ul className="pagination justify-content-center">
        {pages.map((page) => (
          <li key={page} className={page === current_page ? "page-item active" : "page-item"}>
            <a className="page-link" onClick={() => onPageChange(page)} href="# ">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  items_count: PropTypes.number.isRequired,
  page_size: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  current_page: PropTypes.number.isRequired,
};

export default Pagination;

// class Pagination extends Component {
//   render() {
//     return (
//       <nav aria-label="Page navigation example justify-content-center">
//         <ul className="pagination justify-content-center">
//           {/* <li class="page-item">
//                 <a class="page-link" href="#">
//                   Previous
//                 </a>
//               </li> */}
//           <li className="page-item disabled">
//             <a className="page-link" href="# ">
//               1
//             </a>
//           </li>
//           <li className="page-item active">
//             <a className="page-link" href="# ">
//               2<span className="sr-only">(current)</span>
//             </a>
//           </li>
//           <li className="page-item">
//             <a className="page-link" href="# ">
//               3
//             </a>
//           </li>
//           {/* <li class="page-item">
//                 <a class="page-link" href="#">
//                   Next
//                 </a>
//               </li> */}
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Pagination;
