import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

const DivCustomized = styled("div")(() => ({
  marginTop: 65,
  width: "100%"
}));

const Page = ({ children, title = "", description = "" }) => {
  return (
    <DivCustomized>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
          data-react-helmet="true"
        ></meta>
      </Helmet>
      {children}
    </DivCustomized>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Page;
