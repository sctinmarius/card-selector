import { Fragment, memo } from "react";

const Item = ({ name, className, onClick }) => {
  return (
    <Fragment>
      <li className={className} onClick={onClick}>
        {name}
      </li>
    </Fragment>
  );
};

export default memo(Item);
