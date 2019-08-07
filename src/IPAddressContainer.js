import React, { Component } from "react";
import IPAddress from "./IPAddress";

var xhr;
var count = 0 ;
 
class IPAddressContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ip_address: "192.994.99.200"
    };
 
    this.processRequest = this.processRequest.bind(this);
  }
  componentDidMount() {
    //issue with api limiting request code:429
    count +=1 ;
    if (count  <= 1){
      xhr = new XMLHttpRequest();
      xhr.open("GET", "https://ipinfo.io/json", true);
      
      xhr.send();
      xhr.addEventListener("readystatechange", this.processRequest, false);
   }
  }
 
  processRequest() {
    console.log(xhr);
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
 
      this.setState({
        ip_address: response.ip
      });
    }
  }
 
  render() {
    return (
      <IPAddress ip={this.state.ip_address}/>
    );
  }
};

export default IPAddressContainer;