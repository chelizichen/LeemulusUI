import React from "react"
import { Board } from "../../../../leemulus/Board"
import { Title } from "../../../../leemulus/Title"
import V_build from '../../../../assets/code/v_dircetive_build.png'
import V_use from '../../../../assets/code/v_directive_use.png'


function VDirective(){
    return(
        <div style={{width:'78%',marginLeft:'2%'}}>

        <Title title="VDerictive">使用</Title>
        <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
            <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900}}>
                <img src={V_build}  style={{width:"100%",height:"100%",borderRadius:'10px'}} alt="decorator 使用"/>
            </div>
            <div style={{textIndent:'20px',marginBottom:'20px',marginTop:'20px',marginRight:'20px',fontWeight:900}}>
                <img src={V_use}  style={{width:"100%",height:"100%",borderRadius:'10px'}} alt="decorator 使用"/>
            </div>
        </Board>
        </div>
    )
}

export {
    VDirective
}