import { useState, useRef } from "react";
import { capitalCase } from "change-case";
import {
  Badge,
  Box,
  Button,
  IconButton,
  Popover,
  SvgIcon,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import useSetting from "hooks/useSetting";
import { THEMES } from "theme";

const Settings = () => {
  const ref = useRef(null);
  const { settings, saveSettings } = useSetting();
  const [isOpen, setOpen] = useState(false);
  const [values, setValues] = useState({
    theme: settings.theme,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (field, value) => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const handleSave = () => {
    saveSettings(values);
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="Settings">
        <Badge
          color="secondary"
          variant="string"
          sx={{
            borderRadius: 5,
            marginRight: (theme) => theme.spacing(5),
            marginLeft: (theme) => theme.spacing(5),
          }}
        >
          <IconButton color="inherit" onClick={handleOpen} ref={ref}>
            <SvgIcon fontSize="small">
              <SettingsIcon />
            </SvgIcon>
          </IconButton>
        </Badge>
      </Tooltip>
      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
      >
        <Box sx={{ width: 320, padding: (theme) => theme.spacing(2) }}>
          <Typography variant="h4" color="textPrimary">
            Settings
          </Typography>
          <Box sx={{ marginTop: (theme) => theme.spacing(2) }}>
            <TextField
              fullWidth
              label="Theme"
              name="theme"
              onChange={(event) => handleChange("theme", event.target.value)}
              select
              SelectProps={{ native: true }}
              value={values.theme}
              variant="outlined"
            >
              {Object.keys(THEMES).map((theme) => (
                <option key={theme} value={theme}>
                  {capitalCase(theme)}
                </option>
              ))}
            </TextField>
          </Box>
          <Box sx={{ marginTop: (theme) => theme.spacing(2) }}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={handleSave}
            >
              Save Settings
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default Settings;
