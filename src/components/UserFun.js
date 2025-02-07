const UserFun = (props) => {
    const{photo, name, gitHubId} = props
  return (
    <div className="UserCardFun">
     <img className="AboutImage" src={photo}></img>
      <h3>name : {name}</h3>
      <h4>githubId: {gitHubId}</h4>
    </div>
  );
};
export default UserFun;
