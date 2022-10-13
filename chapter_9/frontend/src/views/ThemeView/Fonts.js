import { Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const Note = styled(Typography)(() => ({
  marginBottom: 0,
}));

const Fonts = () => {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Note
            variant="caption"
            color="textSecondary"
            display="block"
            gutterBottom
          >
            Heading 1 - Roboto Regular - 35px
          </Note>
          <Title variant="h1" color="textPrimary">
            Kiki
          </Title>
        </Grid>
        <Grid item xs={6}>
          <Note
            variant="caption"
            color="textSecondary"
            display="block"
            gutterBottom
          >
            Heading 2 - Roboto Regular - 29px
          </Note>
          <Title variant="h2" color="textPrimary">
            React
          </Title>
        </Grid>
        <Grid item xs={6}>
          <Note
            variant="caption"
            color="textSecondary"
            display="block"
            gutterBottom
          >
            Heading 3 - Roboto Regular - 24px
          </Note>
          <Title variant="h3" color="textPrimary">
            Admin Template & Dashboard
          </Title>
        </Grid>
        <Grid item xs={6}>
          <Note
            variant="caption"
            color="textSecondary"
            display="block"
            gutterBottom
          >
            Heading 4 - Roboto Regular - 20px
          </Note>
          <Title variant="h4" color="textPrimary">
            Material UI
          </Title>
        </Grid>
        <Grid item xs={6}>
          <Note
            variant="caption"
            color="textSecondary"
            display="block"
            gutterBottom
          >
            Heading 5 - Roboto Regular - 16px
          </Note>
          <Title variant="h5" color="textPrimary">
            Json Web Token
          </Title>
        </Grid>
        <Grid item xs={6}>
          <Note
            variant="caption"
            color="textSecondary"
            display="block"
            gutterBottom
          >
            Heading 6 - Roboto Regular - 14px
          </Note>
          <Title variant="h6" color="textPrimary">
            Formik
          </Title>
        </Grid>
        <Grid item xs={6}>
          <Note
            variant="caption"
            color="textSecondary"
            display="block"
            gutterBottom
          >
            Body 1 - Roboto Regular - 16px
          </Note>
          <Title variant="body1" color="textPrimary">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
            neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
            neque, aliquet vel, dapibus id, mattis vel, nisi.
          </Title>
        </Grid>
        <Grid item xs={6}>
          <Note
            variant="caption"
            color="textSecondary"
            display="block"
            gutterBottom
          >
            Body 2 - Roboto Regular - 14px
          </Note>
          <Title variant="body2" color="textPrimary">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
            neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
            neque, aliquet vel, dapibus id, mattis vel, nisi.
          </Title>
        </Grid>
      </Grid>
    </>
  );
};

export default Fonts;
