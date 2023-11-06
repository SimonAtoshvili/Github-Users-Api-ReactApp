import Search from './images/Shape 2.svg'


function Second(props) {
    return (
        <div className={`second ${props.mode ? "" : "second_dark"}`}>
            <div className='search_div'>
                <img src={Search} />
                <input type='text' placeholder='Search GitHub username...' className={`${props.mode ? "" : "input_dark"}`} 
                onChange={(e) => {
                    props.setTarget(e.target.value);
                }} />
            </div>
            {!props.ok ? <p style={{ color: '#F74646', fontWeight: 700, fontSize: '15px' }}>No results</p> : null}
            <button
            onClick={() => {
                props.setCount(props.count + 1)
            }}>Search</button>
        </div>
    )
}

export default Second;