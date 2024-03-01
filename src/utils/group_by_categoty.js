export default function groupByCategory(data) {
    const result = {}
    console.log(data)
    for (const value of data || []) {
        const {txt} = value;
        if(!result[txt]) {
            result[txt] = 0
        }
        result[txt] = result[txt] + value.value
    }
    console.log(result)
    return result; 
}
    
