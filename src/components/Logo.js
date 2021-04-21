const Logo = ({ small, large }) => {

  const width = small ? "150px" : large ? "400px" : "250px";
  return (
    <div>
      <img
        src="https://test.visitmypost.com/_next/static/images/logo-light.svg"
        alt="visitmypost.com logo"
        width={width}
      />
    </div>
  );
};

export default Logo;
