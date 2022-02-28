import { Button } from "../leemulus/Button";
import React,{useState} from "react";
import renderer from 'react-test-renderer'
test('Button Component',()=>{
    const [loading,setLoading] = useState(false)
    function changeLoadingFunction()
    {
        setLoading(loading => loading ===true?false:true)
        console.log('123');
    }
    const Component = renderer.create(
        <Button loading={loading}  onChange={changeLoadingFunction}>
            普通
        </Button>
    )
    let tree = Component.toJSON();
    expect(tree).toMatchSnapshot();
    // tree.props
})