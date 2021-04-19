import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { items_count, page_size, onPageChange, current_page } = props;
  console.log(current_page);
  const page_count = Math.ceil(items_count / page_size);
  /**[1...pagesCount] */

  if (page_count === 1) return null;
  const pages = _.range(1, page_count + 1);
  return (
    <nav aria-label="Page navigation example justify-content-center">
      <ul className="pagination justify-content-center">
        {pages.map((page) => (
          <li className={page === current_page ? "page-item active" : "page-item"} key={page}>
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
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
