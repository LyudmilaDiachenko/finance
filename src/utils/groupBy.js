export default function groupBy(data, field_to_group = 'date', field_to_sum = 'value', group_fn = a => a) {
  
  
  
  let grouped = Object.groupBy(data, e => e[group_fn(field_to_group)])
  let result = {}
  for (var key in grouped){
    let item = grouped[key][0]    
    item[field_to_sum] = grouped[key].reduce((acc, a) => acc + a[field_to_sum], 0)
    result[key] = item
  } 
  return result
}