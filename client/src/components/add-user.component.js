import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class AddUser extends React.Component {
  state = {
    email: '',
    name: '',
  }

  render () {
    return (
      <div>
        <input
          type='text'
          placeholder='full name'
          onChange={(e) => this.setState({name: e.target.value})} />
        <input
          type='email'
          placeholder='email'
          onChange={(e) => this.setState({email: e.target.value})} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }

  handleSubmit = () => {
    const { email, name } = this.state
    let that = this;
    this.props.AddUser({ name, email })
      .then(() => {
        that.props.history.push('/');
      })
  }

}


const addUsereMutation = gql`
  mutation AddUser($email: String!,$name:String!){
    AddUser(data:{email:$email,name:$name}){
        email
        name
    }
  }
`
export default graphql(addUsereMutation, {
  props: ({ownProps, mutate}) => ({
    AddUser: ({email, name}) =>
      mutate({
        variables: {email, name}
      })
  })
})(AddUser)
