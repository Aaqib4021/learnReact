const User = (props) => {
  // console.log(props);
  const { name } = props;
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <h3>email:aaqibnengroo5@gmail.com</h3>
      <h3>address : jammu and kashmir</h3>
    </div>
  );
};

export default User;
