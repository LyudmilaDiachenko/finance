export default function Search(
    {
    dateFrom,
    dateTill, 
    setDateFrom, 
    setDateTill
    }
) 
{
    return (
        <div className="date_container">
            <h2 className="date_container_title">
                Доходи та витрати банків
            </h2>
            <div className="input_container">
                <label>
                    з:
                    <input type='date' value={dateFrom} min="2009-02-01" max="2024-01-01" onChange={setDateFrom} className="input_date" />
                </label>
                <label>
                    по: 
                <input type='date' value={dateTill} min="2009-02-01" max="2024-01-01" onChange={setDateTill} className="input_date" />
                </label>
            </div>
        </div>
    )
}
