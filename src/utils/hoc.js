
import React from 'react';
import {withRouter} from 'react-router-dom'

export function withUser(InnerComponent){
    let user = localStorage.getItem('user');
    try{
        user = JSON.parse(user);
    }catch(err){
        console.log('err',err);
    }
    return function withUser(){
        return <InnerComponent user={user} />
    }
}

export function withCommon(InnerComponent){
    // return class extends React.Component{
    //     componentDidMount(){
    //         // const user = JSON.parse(localStorage.getItem('user'));
    //         // this.setState({
    //         //     user
    //         // })
    //         console.log('withCommon');
    //     }
    //     render(){
    //         return <InnerComponent/>
    //     }
    // }
    @withRouter
    class Common extends InnerComponent{

        componentDidMount(){
            console.log('withCommon',this);
            super.componentDidMount();
        }

        // 用户权限控制
        // shouldComponentUpdate(){
        //     if(this.props.user){
        //         return true;
        //     }
        //     return false;
        // }

        render(){
            if(this.props.user){
                return super.render();
            }else{
                this.props.history.push('/login')
                return <div>没登陆</div>
            }
            
        }
    }
    return Common
}