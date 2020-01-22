const Layout = ({ children }) => {
  return (
    <>
      <h1 className="text-5xl font-bold text-purple-600">
        Welcome to Alyreza.js!
      </h1>
      <div className="flex-1 min-h-screen">{children}</div>
    </>
  );
};

export default Layout;
