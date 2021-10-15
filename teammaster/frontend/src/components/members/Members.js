import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getMembers, deleteMembers } from '../../actions/membersaction';

export class Members extends Component {
    static propTypes = {
        memberarray: PropTypes.array.isRequired,
        getMembers: PropTypes.func.isRequired,
        deleteMembers: PropTypes.func.isRequired
    };

    componentDidMount(){
        console.log("getMembers fired");
        this.props.getMembers();
    }
    
    render() {
        return (
            <Fragment>
                <h2>Members</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.memberarray.map(member=>(
                            <tr key={member.id}>
                                <td>{member.id}</td>
                                <td>{member.name}</td>
                                <td>{member.email}</td>
                                <td>{member.message}</td>
                                <td><button onClick={this.props.deleteMembers.bind(this,member.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state =>({
    memberarray: state.memberreducer.memberarray
})

export default connect(mapStateToProps, {deleteMembers,getMembers})(Members);
