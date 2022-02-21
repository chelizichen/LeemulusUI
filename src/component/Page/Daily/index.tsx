import { AddItem } from "./component/addItem"
import { Group } from "./component/group"
import { List } from "./component/list"

function Daily()
{
    return(
        <div>
            <div style={{width:'40%',display:'inline-block'}}>
                <Group/>
            </div>
            <div style={{width:'40%',display:'inline-block'}}>
                <List/>
                <AddItem/>
            </div>
        </div>
    )
}
export default Daily