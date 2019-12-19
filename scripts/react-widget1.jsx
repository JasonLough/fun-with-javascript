/*
  These are my notes I took while watching this video up to 1:15

    https://www.youtube.com/watch?v=Ke90Tje7VS0&t=3060s

  This widget was made to showcase various features of ReactJS. Try un-commenting various lines in the render() method.

  This is in no way a best practices or 'you should do all these things' type of thing, lol. The point is, if you dont know what something is here, watch the video or look it up.

*/

import React, { Component } from "react";

class Widget1 extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    count: 0,
    imgURL: "https://picsum.photos/200",
    color: "red",
    border: "dashed",
    myText: "well this is interesting...",
    myList: ["cats", "dogs", "chimps", "mice", "birds", "frogs"],
    elem: <p>elem? this works??? lol</p> //lol!
  };

  //if count = 0, return 'zero', otherwise the count
  formatCount() {
    let { count } = this.state;
    return ~~count === 0 ? (
      <div className="count zero">Zero</div>
    ) : (
      <div className="count">{count}</div>
    );
  }

  //return a fragment
  randImg() {
    return (
      <React.Fragment>
        <img src={this.state.imgURL} alt="" />
      </React.Fragment>
    );
  }

  //show that JSX is really a first class citizen
  foo(x) {
    //pass JSX in...
    let a = <span>lol</span>; //assign JSX to a variable...
    return (
      //return JSX...
      <React.Fragment>
        <p>above</p>
        {x}
        {a}
        <p>underneath!</p>
        {a}
      </React.Fragment>
    );
  }

  //three ways to add styles: inline style={height:10}, via styles object, via className
  styles = {
    styledDiv: {
      border: "2px solid " + this.state.color,
      height: "20px",
      width: "200px",
      padding: "30px",
      margin: "30px"
    },
    dashedStyledDiv: {
      border: "2px dashed " + this.state.color
    },
    dottedStyledDiv: {
      border: "2px dotted " + this.state.color
    }
  };

  //use state to determine things
  styledDiv() {
    let { border } = this.state; //deconstructing!
    console.log(border);
    let b =
      border === "dotted"
        ? this.styles.dottedStyledDiv
        : this.styles.dashedStyledDiv;
    console.log(b);
    return (
      //note the Object.assign(obj1, obj2) as it creates a mashup of the two objects
      <div style={Object.assign(this.styles.styledDiv, b)}>styled div here</div>
    );
  }

  //creates then retruns JSX via a list from state
  //note the key= part
  renderList() {
    return (
      <ul>
        {this.state.myList.map((e, i) => (
          <li key={e + i}>{e}</li>
        ))}
      </ul>
    );
  }

  //if count is 0, log one thing, otherwise, log another
  countColor() {
    let { count } = this.state; //deconstructing ftw
    if (count === 0) {
      console.log("should be yellow");
    } else {
      console.log("should be blue");
    }
  }

  //assign classes (a string really) based on state.count
  getButtonColor() {
    let classes = "btn-sm m-2 btn btn-";
    let x = this.state.count === 0 ? `${classes}danger` : `${classes}info`;
    //console.log(x);
    return x;
  }

  //note that setState schedules an async call to render
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
    console.log("clicked!", this.state.count);
  }

  resetCount() {
    this.setState({
      count: 0
    });
  }

  makeButtons() {
    return (
      <React.Fragment>
        <button
          className={this.getButtonColor()}
          onClick={this.handleClick.bind(this)}
        >
          Clicks: {this.state.count}
        </button>

        <button
          className="btn-sm m-2 btn btn-warning"
          onClick={this.resetCount.bind(this)}
        >
          Reset
        </button>
      </React.Fragment>
    );
  }

  render() {
    //this.countColor(); //often, youll want to put stuff here, but this is polluting the render method. Usually its more organized to put it in a function

    return (
      <React.Fragment>
        {/* {this.renderList()} */}

        {/* {this.state.elem} */}

        {/* {this.randImg()} */}

        {/* {this.state.myText.length === 0 && this.state.myText} */}

        {/* {this.styledDiv()} */}
        {/* <h1>FoooooooBarrrrr!!</h1> */}

        {/* <div className="badge badge-warning m-2 active">
          this.state.count: {this.formatCount()}
        </div> */}

        {/* {this.foo(<p>ok...</p>)} */}

        {this.makeButtons()}
      </React.Fragment>
    );
  }
}

export default Widget1;

/*
---- quiz ----

Q: Why must you import react on a page that only has this code:
    const elem = <h1>hello</h1>
A: Because Babel turns it into :
    var elem = React.createElement("h1", null, "hello");
which uses the React object.


Q: How can you view the shadow dom object of 
    const elem = <h1>hello</h1>
A: console.log(elem)
(And thats why you need ReactDOM as well)


Q: What does React.Fragment do?
A: Instead of having unnecessary wrappers wrapping a component, you can use React.Fragment
    <div>    <----- this wrapper div is unnecessary on the DOM
        <whatever>....</whatever>
    </div>

    //do this instead:

    <React.Fragment> <------ dosent show up on the DOM
        <whatever>...</whatever>
    </React.Fragment>


T/F: inside react {}, you can put any expression? 
T
{2 + 2}
{a = 5}
//remember an expression returns a value, compared with a statement


JSX objects are like first class functions :
    you can pass them into functions
    you can return them from functions
    you can assign them to a variable

    
list 3 ways to style a thing:
    inline: 
        <div style={{ color:'blue' }}>here</div>
    className: 
        <div className="whatever">here</div>
    class property: 
        styles = { color: 'blue'}, <div style={this.styles}>here</div>

*/
