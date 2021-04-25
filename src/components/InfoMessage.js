import { paths } from "../paths";
import Logo from "./Logo";

const InfoMessage = () => {
  const { site } = paths;

  return (
    <div className="column_wrapper">
      <Logo large/>

      <p className="text">
        VisitMyPost is a social media and marketing platform enables people to
        manage their social media and live traffic in an easier way.
        Check our website to get to know more <a className='link' href={site}>Go to VisitMyPost.com</a>
      </p>
    
    </div>
  );
};

export default InfoMessage;
