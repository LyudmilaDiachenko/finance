export default function groupBy(data, field_to_group = 'date', field_to_sum = 'value', group_fn = a => a) {  
  let current_field_to_group = Array.isArray(field_to_group) ? field_to_group.shift() : field_to_group
  let current_group_fn = Array.isArray(group_fn) ? group_fn.shift() : group_fn;
  let grouped = Object.groupBy(data, e => current_group_fn(e[current_field_to_group]))
  let result = {}
  for (var key in grouped){
    let arr = 
      (Array.isArray(field_to_group) && field_to_group.length > 0) ? 
      Object.values(groupBy(grouped[key], [...field_to_group], field_to_sum, [...group_fn])) : 
      grouped[key]

    let item = arr[0]    
    item[field_to_sum] = arr.reduce((acc, a) => acc + a[field_to_sum], 0)
    result[key] = (Array.isArray(field_to_group) && field_to_group.length > 0) ? arr : item
  } 
  return result
}