import { C,D } from "../constant";
const initState = 100;
function b(preState = initState,action)
{
    const { type,data } = action
    switch (type) {
        case C:
            return data + preState + 10
        case D:
            return data - preState - 10
        default:
            return preState
    }
}
export default b