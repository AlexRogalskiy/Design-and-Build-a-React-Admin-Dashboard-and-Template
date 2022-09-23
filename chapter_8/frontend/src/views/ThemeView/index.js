import Page from "components/Page";
import Fonts from "./Fonts";
import { Typography, Container, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import Background from "./Colors/Background";
import Text from "./Colors/Text";
import General from "./Colors/General";


export const PaperCustomized = styled(Paper)(({ theme }) => ({
  minHeight: "5rem",
  ...theme.typography.body1,
  padding: theme.spacing(2),
  textAlign: "center",
  justifyContent: "flex-start",
  display: "flex",
  alignItems: "flex-end",
}));

export const ColorText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const Title = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const ThemeView = () => {
  return (
    <Page title="Kiki: Design System">
      <Container maxWidth="lg">
        <Title variant="h1" color="textPrimary">
          Theme Overview
        </Title>
        <Title variant="h2" color="textPrimary">
          Colors
        </Title>

        <Title variant="h3" color="textSecondary">
          General Colors
        </Title>
        <General />

        <Title variant="h3" color="textSecondary">
          Text Colors
        </Title>
        <Text />

        <Title variant="h3" color="textSecondary">
          Background Colors
        </Title>
        <Background />

        <Title variant="h2" color="textPrimary">
          Typography
        </Title>
        <Fonts />
      </Container>
    </Page>
  );
};

export default ThemeView;
