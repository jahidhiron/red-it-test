import Header from "./Header";
import { Helmet } from "react-helmet-async";

export const PublicLayout = ({ component: Component, ...rest }) => {
  return (
    <>
      <Helmet>
        <title>{rest.title}</title>
      </Helmet>
      <Header />
      <Component {...rest} />
    </>
  );
};
