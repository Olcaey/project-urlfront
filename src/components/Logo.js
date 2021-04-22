const Logo = ({ small }) => {
  const style = small ? "logo_small" : "logo_large";

  return (
    <img
      className={style}
      src="https://test.visitmypost.com/_next/static/images/logo-light.svg"
      alt="visitmypost.com logo"
    />
  );
};

export default Logo;
