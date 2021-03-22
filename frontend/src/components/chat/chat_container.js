
import { connect } from 'react-redux'; 
import Chat from './chat'


const mSTP = state => {
    // debugger
    const name = state.session.user.username
    return({
      name,
    })
}

const mDTP = dispatch => {
    return ({

    })
}

export default connect(mSTP, mDTP)(Chat)