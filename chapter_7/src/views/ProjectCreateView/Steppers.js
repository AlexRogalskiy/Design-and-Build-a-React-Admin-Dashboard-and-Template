import { Avatar } from "@mui/material";
import PropTypes from "prop-types";
import StarIcon from "@mui/icons-material/Star";
import DetailsIcon from "@mui/icons-material/Details";
import TagIcon from "@mui/icons-material/Tag";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export const steps = [
  {
    label: "Basic information",
    icon: StarIcon,
  },
  {
    label: "Detailed description",
    icon: DetailsIcon,
  },
  {
    label: "Budget",
    icon: AttachMoneyIcon,
  },
  {
    label: "Tags",
    icon: TagIcon,
  },
];

export const CustomStepIcon = ({ active, completed, icon }) => {
  const Icon = steps[icon - 1].icon;

  return (
    <Avatar
      sx={{
        ...(active && {
          backgroundColor: (theme) => theme.palette.secondary.main,
          color: (theme) => theme.palette.secondary.contrastText,
          boxShadow: (theme) => theme.shadows[5],
        }),
        ...(completed && {
          backgroundColor: (theme) => theme.palette.secondary.main,
          color: (theme) => theme.palette.secondary.contrastText,
        }),
      }}
    >
      <Icon />
    </Avatar>
  );
};

CustomStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.number.isRequired,
};
