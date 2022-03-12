import { Board } from "../../../../leemulus/Board"
import { Title } from "../../../../leemulus/Title"

function Use()
{
    return(
        <div style={{width:'78%',marginLeft:'2%'}}>

            <Title title="使用">如何去使用</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    目前由于还是在测试开发阶段，所以并没有上传到 Npm 和 Git 上，
                    不过源码可以通过此页面的 #组件 进行查看，如果有Bug
                    或者可以改进的地方可以联系我，在首页底部有我的联系方式。
                </div>

                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    暂定的 NPM Package Name 为 leemulusui
                </div>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    命令行： npm install leemulusui
                </div>

            </Board>
            <Title title="新版本">0.0.2</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    全面使用TypeScript重构，不过依旧没有经过测试，
                    目前在建设网站的同时也在测试组件库是否工作正常
                </div>
            </Board>
            <Title title="旧版本">0.0.1</Title>
            <Board  border style={{padding:'20px',marginTop:'20px',marginBottom:'20px'}}>
                <div style={{textIndent:'20px',marginBottom:'20px'}}>
                    使用的JavaScript进行开发，只经过简单测试，并没有投入使用
                </div>
            </Board>
        </div>
    )
}
export {
    Use
}