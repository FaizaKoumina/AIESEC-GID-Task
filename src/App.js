import React from 'react';

import './App.css';

import Opportunities from './components/Opportunities';
import OpportunityModal from './components/opportunity-modal/OpportunityModal';

const API_KEY = "dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c";

class App extends React.Component {

  state = {
    paging: [],
    opportunities: [],
    show: false,
    opportunity:{
      title: '',
      description: '',
    },
    activeItemId: null,
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = (id) => {
    this.setState({
      show: true,
      activeItemId: id,
    });
  };


  componentDidMount() {
    this.displayOpportunities();
  }

  displayOpportunities() {
    fetch(`https://api-staging.aiesec.org/v2/opportunities.json?access_token=${API_KEY}&per_page=200&sort=+relevance`)
    .then( (res) => res.json())
    .then((results) => {
      this.setState({
        opportunities: results.data,
        paging: results.paging,
      })
    });
  }

  handleChangeTitle = (e) => {
    this.setState({
      title : e.target.value,
    });
  }

  handleChangeDescription = (e) => {
    this.setState({
      description : e.target.value,
    });
  }


  updateOpportunity = (e) => {
    e.preventDefault();
    console.log("Title:" + this.state.title);
    let id = this.state.activeItemId;
    const url = `https://api-staging.aiesec.org/v2/opportunities/${id}?access_token=${API_KEY}`;
    const data = {opportunity:{
      title: this.state.title,
      description: this.state.description,
    },};

    fetch(url, {
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((response) => {this.displayOpportunities();});
  }

  displayProgramme(productId){
    if (productId === 1) {
      return "Global Volunteer";
    }else if (productId === 2) {
      return "Global Talent";
    }else {
      return "Global Entrepreneur";
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          <img src={require('./aiesec_logo.png')} style={{height:"34px", width:"auto"}} />
        </header>

        <div className="App__big-title">
          <div className="container">
            <h1>Activating Youth Leadership since 1948.</h1>
          </div>
        </div>

        <div className="App__total-items container">
          <p>{this.state.paging.total_items + " opportunities found."}</p>
          <hr/>
        </div>

        <Opportunities opportunities={this.state.opportunities} handleShow={this.handleShow} displayProgramme={this.displayProgramme}/>

        <OpportunityModal show={this.state.show} handleClose={this.handleClose} handleChangeTitle={this.handleChangeTitle} handleChangeDescription={this.handleChangeDescription} updateOpportunity={this.updateOpportunity} />
      </div>
    );
  }
}

export default App;
