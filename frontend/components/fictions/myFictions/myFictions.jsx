import React from 'react'



class MyFictions extends React.Component{
    constructor(props){
        super(props)
    }

    test(){
        this.props.getMyStories(this.props.currentId).then((res)=>{
            debugger;
            console.log(res);
        },(error)=>{
            debugger;
            console.log(error)
        });
    }

    render(){
        //debugger
        this.test.bind(this)();
        return(
            <>
                <h1>title</h1>
            </>
        )
    }
}
export default MyFictions;