import type { FC } from "react";

const Spinner: FC = () => (
  <div className="spinner-container absolute top-[50%] right-[50%]">
    <div className="loading-spinner"></div>
  </div>
);

export default Spinner;
