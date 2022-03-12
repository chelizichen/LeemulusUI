import e from "express"
import { Board } from "../../../../leemulus/Board"
import { ShowCurrTime } from "../../../../leemulus/Time"
import { Title } from "../../../../leemulus/Title"
import { initTask, itemMenuInterFace } from "./task"

function Important()
{

    return (
      <div style={{width:'78%',marginLeft:'2%'}}>

          <Title title="Important">
            <ShowCurrTime/>
          </Title>

          <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>  
              <ol>
                {
                  initTask.map( (el:itemMenuInterFace) =>{
                    if(el.important){
                      return(
                        <li key={el.index}>{el.todo}</li>
                      ) 
                    }
                  })
                }
              </ol>
          </Board>
      </div>
    )
}
export{
    Important
}