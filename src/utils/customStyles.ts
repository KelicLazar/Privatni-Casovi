export const searchBarTheme = (theme: any) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#0b6e4f",
    primary25: "#0b6e4f",
    primary50: "#0b6e4fae",
    primary75: "#0b6e4f",
  },
});
export const searchBarStyles = {
  singleValue: (provided: any, state: any) => ({
    ...provided,
    fontWeight: "500",
    color: "#e6e8e6",
    fontSize: "1.2rem",
  }),
  container: (provided: any, state: any) => ({
    ...provided,
    color: "#e6e8e6",
  }),
  valueContainer: (provided: any, state: any) => ({
    ...provided,
    color: "#e6e8e687",
  }),
  placeholder: (provided: any, state: any) => ({
    ...provided,
    fontWeight: "800",
    letterSpacing: "1.6px",
    color: "#e6e8e687",
  }),
  menuList: (provided: any, state: any) => ({
    ...provided,
    border: "2px solid #0b6e4f",
    borderRadius: "5px",
    backgroundColor: "#151515",
    color: "#e6e8e687",
    fontSize: "1.3rem",
  }),
  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    color: state.isFocused ? "#0b6e4f" : "#e6e8e6",
  }),
  clearIndicator: (provided: any, state: any) => ({
    ...provided,
    color: state.isFocused ? "#0b6e4f" : "#e6e8e6",
  }),
  indicatorSeparator: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#0b6e4f" : "#e6e8e6",
  }),
  input: (provided: any, state: any) => ({
    ...provided,
    color: "#e6e8e6",
    fontWeight: "500",
    letterSpacing: "1.6px",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.hasValue ? "#0b6c3872" : "#2525258a",
  }),
};

export const creatableSelectStyles = {
  ...searchBarStyles,
  control: (provided: any, state: any) => {
    return { ...provided, backgroundColor: "#252525" };
  },
  placeholder: (provided: any, state: any) => {
    return {
      ...provided,
      textTransform: "uppercase",
      fontWeight: "500",
      letterSpacing: "1.02px",
    };
  },
};

export const avatarMenuStyles = {
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "#151515",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
};
