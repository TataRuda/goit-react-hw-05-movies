import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import css from './BackLink.module.css';

export const BackLink = ({ to, children }) => {
  return (
    <Link className={css.backLink} to={to}>
      <BiArrowBack className={css.backLinkIcon} size="30" />
      {children}
    </Link>
  );
};