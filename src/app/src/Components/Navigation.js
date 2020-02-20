import React from 'react'
import {Link} from "react-router-dom"

class Navigation extends React.Component {
    render() {
        return <div className="">
            <ul>
                    {
                        this.props.navigationArr.map((val, index) => {
                            return <li key={index}><Link to={val.to}>{val.title}</Link></li>
                        })  
                    }
            </ul>
        </div>
    }
}
export default Navigation