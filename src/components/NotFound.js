import { paths } from "../paths";

const NotFound = () => {
  const { site } = paths;
  return (
    <div className="column_wrapper">
      <div className="">
        <h2 className="title">Url Not Found</h2>
        <p className="text">
          The url you are looking for does not exist. Please check it
          again or try another one.Maybe what you are looking for can be found
          at <a  className='link' href={site}>VisitMyPost.com</a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
