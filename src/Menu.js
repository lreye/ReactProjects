import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
    render() {
        console.log("Rendering: Menu")
        var visibility = "hide";
        if (this.props.menuVisibility) {
            visibility = "show";
        }
        var hrefer = "#"
        return (
            <div id="flyoutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>
                <h2><a href={hrefer}>Home</a></h2>
                <h2><a href={hrefer}>About</a></h2>
                <h2><a href={hrefer}>Contact</a></h2>
                <h2><a href={hrefer}>Search</a></h2>
            </div>
        );
    }
}export default Menu;
