function ShowCurrTime()
{
    let currDate = new Date();
    return(
        <div>
            <div style={{display:'flex',fontSize:'20px'}}>
                <div>{currDate.getFullYear()}</div>
                <div>年</div>
                <div>{currDate.getMonth()+1}</div>
                <div>月</div>
                <div>{currDate.getDate()}</div>
                <div>日</div>
            </div>
        </div>
    )
}
export{
    ShowCurrTime
}