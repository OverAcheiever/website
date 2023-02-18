import type { FC } from "react";

const GatedExample: FC = () => (
  <video width="750" height="500" controls>
    <source
      src="https://raw.githubusercontent.com/EsyWin/cdn/main/misc/rickrolled.mp4"
      type="video/mp4"
    />
  </video>
);

export default GatedExample;
