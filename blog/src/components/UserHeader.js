import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions'

class UserHeader extends React.Component {
    
    componentDidMount(){
        this.props.fetchUser(this.props.userId)
    }

    render(){
        const { user } = this.props
        if(!user){
            return null
        }

        return <div>{user.name}</div>
    }
}

// ownProps, reference to props passed into component
const mapStateToProps = (state, ownProps) => {
    return { 
        user: state.users.find((user) => user.id === this.props.ownProps.userId)
    }
}

export default connect(mapStateToProps, {fetchUser})(UserHeader)