import dynamic from "next/dynamic";
import React from "react";

function Svg({
  className = "",
  name = "logo",
  width = 18,
  height = 18,
  fill = "#029147",
  onClick = (e: any) => e,
}) {
  const RequiredSvg = dynamic(import(`/public/assets/svg/${name}.svg`));

  if (typeof RequiredSvg == "object") {
    return (
      <div
        className="svg-wrapper"
        style={{
          width,
          height,
          position: "relative",
        }}
      >
        {/* @ts-ignore */}
        <RequiredSvg
          onClick={onClick}
          className={`no-trans ${className}`}
          fill={fill}
          width={"100%"}
          height={"100%"}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        />
      </div>
    );
  }
  return <></>;
}

export default React.memo(Svg);
