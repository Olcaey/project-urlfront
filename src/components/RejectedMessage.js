import { paths } from "../paths";
import Logo from "./Logo";

const RejectedMessage = () => {
  const { site } = paths;

  return (
    <div className="column_wrapper">
      <Logo large/>
      <img
        className="illustration"
        src="https://res.cloudinary.com/dlt51mt3f/image/upload/v1618983537/Saly-11_shafi9.png"
        alt="3d man illustiration"
      />

      <p className="text">
        VisitMyPost is a social media and marketing platform enables people to
        manage their social media and live traffic in an easier way.
        Check our website to get to know more <a className='link' href={site}>Go to VisitMyPost.com</a>
      </p>
    
    </div>
  );
};

export default RejectedMessage;
