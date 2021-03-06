import React , { Component } from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Checkout from '../../containers/Checkout/Checkout';

class Layout extends Component { 
    state={
        showSideDrawer:false
    }

    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false})
    }

    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return(
                {showSideDrawer:!prevState.showSideDrawer}
            )
        }
            )
    }

    render () {
        return(
            <Aux>
                <Toolbar openDrawer={this.sideDrawerToggleHandler}/>
                <SideDrawer closed={this.sideDrawerClosedHandler}
                            open={this.state.showSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>

            // <Checkout/>
        )
    }
}
export default Layout;
