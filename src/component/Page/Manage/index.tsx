import { FCComponent } from "./component/FCcomponent"
import { TestPureComponentFather } from "./component/PureComponent"
import { HookDemo } from "./component/UseMemo"
import { UseMemoDemo } from "./component/UseMemoDemo"

function Manage()
{
    return(
        <div>
            <h1>Manage</h1>
            <FCComponent firstName={"leemulus"} lastName={""}/>
            <TestPureComponentFather />
            <HookDemo/>
            <UseMemoDemo/>
        </div>
    )
}
export  {
    Manage
}