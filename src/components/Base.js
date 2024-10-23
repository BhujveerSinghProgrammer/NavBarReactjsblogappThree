const Base = ({ title = "welcome to our website", children }) => {
  return (
    <div className="container-fluid">
      <h1>This is our header</h1>
            {children}
      <h1>This is our Footer</h1>
    </div>
  );
};

export default Base;
