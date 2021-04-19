import _ from "lodash";

export default function paginate(items, page_number, page_size){
    const start_index = (page_number-1)*page_size;
    return _(items).slice(start_index).take(page_size).value();
    // _.slice(items, startIndex)
    // _.take()
}