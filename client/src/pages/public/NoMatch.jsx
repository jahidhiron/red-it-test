import { Outlet } from "react-router-dom";

function NoMatch() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "80vw",
        height: "80vh",
        overflow: "hidden",
      }}
    >
      <h3>404 Not found</h3>
      <Outlet />
    </div>
  );
}

export default NoMatch;
