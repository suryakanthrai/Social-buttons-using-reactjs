function Button(props) {
  //   Write your code here.
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
}

const element = (
  //   Write your code here.
  <div className="bg-container">
    <div className="content-container">
      <h1 className="main-heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button buttonText="Like" className="like-button" />
        <Button buttonText="Comment" className="Comment-button" />
        <Button buttonText="Share" className="share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
