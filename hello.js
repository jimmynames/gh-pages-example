const Hello = React.createClass({
  displayName: 'Hello',

  render: function () {
    return React.createElement(
      'div',
      null,
      'I am a React component'
    );
  }
});

const mountNode = document.getElementById('container');

ReactDOM.render(React.createElement(Hello, null), mountNode);
