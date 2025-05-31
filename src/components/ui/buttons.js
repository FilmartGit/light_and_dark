const ButtonsUI = {
  Link: ({ href, className, children }) => {
    return (
      <a
        href={href}
        className={className}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          color: "white",
          backgroundColor: "var(--bg-button-color)",
          padding: ".5rem",
          borderRadius: ".25rem",
        }}
      >
        {children}
      </a>
    );
  },
};

export default ButtonsUI;
