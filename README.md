# Iterator

*Dependencies:*
[pluralize](https://www.npmjs.com/package/pluralize)

*DEMO:*

```
import React, { Component } from 'react';
import Iterator from 'iterator'

class Post = ({post}) =>  {
  render() {
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }
}

class Demo extends Component {
  render() {
    let sampleData = [
      {
        title: "Angular vs Reactjs",
        content: "this test is content for testing"
      },
      {
        title: "Redux to manage state",
        content: "this test is content for testing"
      },
      {
        title: "Angular",
        content: "this test is content for testing"
      }
    ];
    return (
      <div className="App">
        <Iterator name="posts" iterate={sampleData}>
          <Post />
        </Iterator>
      </div>
    );
  }
}

export default Demo;
```
