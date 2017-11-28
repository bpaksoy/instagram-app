import React, { Component } from 'react';
import superagent from 'superagent'


class InstagramFeed extends Component {

  constructor() {
    super()
    this.state = {
      username: ''
    }
  }

  updateUsername(event) {
    this.setState({
      username: event.target.value
    })
  }

  fetchFeed() {
    console.log('fetchFeed: ' + this.state.username)
    superagent.get('/instagram/' + this.state.username)
    .query(null)
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err){
        console.log('ERROR: '+ err.message)
        // res.json({
        //   confirmation: 'fail',
        //   message: err.message
        // })
        return
      }

      console.log('FEED: '+ JSON.stringify(response.body))
      // res.json(response.body)
    })

  })

  }

  render() {

    return (
      <div className="container">
        <div className="row">

          <div className="col-md-3">
            <h4>Enter Username</h4>
            <input onChange={this.updateUsername.bind(this)} type="text" className="form-control" placeholder="Username"></input>
            <button onClick={this.fetchFeed.bind(this)} style={{marginTop:16}} className="btn btn-success">Get Instagram Posts</button>


          </div>

          <div className="col-md-9">


          </div>



        </div>
        this is the InstagramFeed!
      </div>
    )
  }
}

export default InstagramFeed;
