const state = () => {
  let result = "";
  let order = "";
  let department = "";
  let range = "";
  for (let name in state) {
    if (name === "order") {
      let temp = "";
      for (const v of state[name]) {
        temp = v;
      }
      if (temp.toUpperCase() === "ASCENDING") {
        order = "order=price";
      }
      if (temp.toUpperCase() === "DESCENDING") {
        order = "order=-price";
      }
    }

    if (name === "department") {
      let _base_str = "";
      if (state[name].length > 1) {
        _base_str = "&department=";
      } else {
        _base_str = "department=";
      }
      for (let d of state[name]) {
        department += _base_str + d.charAt(0).concat(d.slice(1).toLowerCase());
      }
    }

    if (name === "price") {
      let _price_str_arr = [];
      for (let p of state[name]) {
        if (p.match(/less/i)) {
          p = p.replace(/[\D]+/i, "0 - ");
        }
        if (p.match(/greater/i)) {
          p = p.replace(/[\D]+/i, "").concat(" - 999");
        }
        _price_str_arr = _price_str_arr.concat(p.match(/[\d]+/g));
      }

      let sorted_matched_arr = _price_str_arr.sort(function(a, b) {
        return a - b;
      });

      for (let index = 0; index < sorted_matched_arr.length; index++) {
        if (sorted_matched_arr[index] === sorted_matched_arr[index + 1]) {
          sorted_matched_arr.splice(index, 2);
          index--;
        }
      }

      for (let index = 0; index < sorted_matched_arr.length; index++) {
        if (index % 2 === 0) {
          if (range) {
            range += `&range=${sorted_matched_arr[index]}-${
              sorted_matched_arr[index + 1]
            }`;
          } else {
            range += `range=${sorted_matched_arr[index]}-${
              sorted_matched_arr[index + 1]
            }`;
          }
        }
      }
    }
  }
  if (range) {
    result += range;
  }
  if (order) {
    if (result) {
      order = `&${order}`;
    }
    result += order;
  }
  if (department) {
    if (result) {
      department = `&${department}`;
    }
    result += department;
  }

  return result;
};

export default state;