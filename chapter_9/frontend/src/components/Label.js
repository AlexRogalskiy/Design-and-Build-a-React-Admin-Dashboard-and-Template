import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";


const SpanStyled = styled("span")(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  alignItems: "center",
  borderRadius: 2,
  display: "inline-flex",
  flexGrow: 0,
  whiteSpace: "nowrap",
  cursor: "default",
  flexShrink: 0,
  fontSize: theme.typography.pxToRem(12),
  fontWeight: theme.typography.fontWeightMedium,
  height: 20,
  justifyContent: "center",
  letterSpacing: 0.5,
  minWidth: 20,
  padding: theme.spacing(0.5, 1),
  textTransform: "uppercase",
}));


const SpanCustomized = styled(SpanStyled)(({ color, theme }) => ({
  ...(color === "primary" && {
    color: theme.palette.primary.main,
  }),
  ...(color === "secondary" && {
    color: theme.palette.secondary.main,
  }),
  ...(color === "error" && {
    color: theme.palette.error.main,
  }),
  ...(color === "success" && {
    color: theme.palette.success.main,
  }),
  ...(color === "warning" && {
    color: theme.palette.warning.main,
  }),
}));


const Label = ({
  color = "secondary",
  children,
}) => {
  return (
      <SpanCustomized color={color}>{children}</SpanCustomized>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "error",
    "warning",
    "success",
  ]),
};

export default Label;
