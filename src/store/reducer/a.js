import { A,B } from "../constant";
const initState = 0;

function a(preState = initState,action)
{
    const { type,data } = action
    switch (type) {
        case A:
            return data + preState
        case B:
            return data - preState
        default:
            return preState
    }
}
export default a