
// const data = [
//     {value: 70, caption: 'majority', key: 1},
//     {value: 20, caption: 'minority', key: 2},
//     {value: 10, caption: 'others', key: 3}
// ]
export default function BarDiagram({
    caption, 
    class_suffix, 
    data, 
    select_options, 
    select_onchange, 
    dateFrom,
    dateTill, 
    setDateFrom, 
    setDateTill
}) {
    const max = data.reduce((acc, el) => el.value > acc ? el.value : acc, 0)

    return (
    <div className={`bar_diagram_container${class_suffix}`}>
        <div className={`bar_diagram_caption${class_suffix}`}>
            {caption}
        </div>
        <div  className={`bar_diagram_select_container${class_suffix}`}>
            <select className={`bar_diagram_select${class_suffix}`} onChange={select_onchange}>
                {select_options.map(option =>
                    <option key={option.caption+'-'+option.value} value={option.value}>{option.caption}</option>
                )}
            </select>
        </div>
        <h2>
            Доходи та витрати банків
        </h2>
        <div>
            <label>
                <p>Період</p>
                з:
                <input type='date' value={dateFrom} min="2009-02-01" max="2024-01-01" onChange={setDateFrom} />
            </label>
            <label>
                по: 
                <input type='date' value={dateTill} min="2009-02-01" max="2024-01-01" onChange={setDateTill} />
            </label>
        </div>
        <div className={`bar_diagram_body${class_suffix}`}>
            {data.map(bar => 
                <div 
                    key={bar.key}
                    className={`bar_diagram_body_item${class_suffix}`} 
                    style={{
                        backgroundColor: 'red', 
                        height: `${100 * bar.value / max}%`,
                        width: `${100 / data.length}%`,
                        marginRight: "20px"
                    }}
                    title={bar.caption + ' - ' + bar.date.toDateString() + ' - ' + Math.round(bar.value)}
                ></div>
            )}
        </div>
        <div className={`bar_diagram_legend${class_suffix}`}>

        </div>
    </div>
  )
}
