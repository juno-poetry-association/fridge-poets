import { Link } from "react-router-dom";

const Button = (props) => {
  const { yourPoem } = props;
  return (
    <Link to="/poem">
      <button>Click here to see saved poem!</button>
    </Link>
  );
};

export default Button;
