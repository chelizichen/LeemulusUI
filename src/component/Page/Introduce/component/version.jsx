import { Board } from "../../../../leemulus/Board"
import { Title } from "../../../../leemulus/Title"
function Version()
{
    return (
        <div style={{width:'70%',padding:'10px 20px 0 20px'}}>
            <Title title="最新版本">0.0.2</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    全面使用TypeScript重构，不过依旧没有经过测试，
                    目前在建设网站的同时也在测试组件库是否工作正常
                </div>
            </Board>
            <Title title="历史版本">0.0.1</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    使用的JavaScript进行开发，只经过简单测试，并没有投入使用
                </div>
            </Board>
        </div>
    )
}
export {
    Version
}