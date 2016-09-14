export const style = {
  chatButton: {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    background: "rgb(58, 155, 207)",
    color: "white",
    zIndex: "1000",
    height: "60px",
    width: "60px",
    border: "1px solid #ccc",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "2px 4px 2px -2px rgba(0,0,0,0.3)"
  },
  chatImage: {
    display: "block",
    height: "40px",
    width: "40px",
    filter: "invert(100%)",
    WebkitFilter: "invert(100%)",
    MozFilter: "invert(100%)"
  },
  messageWrapper: {
    display: "flex",
    flexFlow: "row nowrap"
  },
  chatRight: {
    color: "#666666",
    margin: "0.5rem 0",
    padding: "1rem",
    borderRadius: "5px",
    background: "rgb(230, 230, 234)"
  },
  chatLeft: {
    color: "white",
    margin: "0.5rem 0",
    padding: "1rem",
    borderRadius: "5px",
    background: "rgb(58, 155, 207)"
  },
  client: {
    width: "350px",
    position: "fixed",
    zIndex: "1000",
    right: "0",
    top: "0",
    bottom: "0",
    background: "rgb(247, 247, 248)",
    borderLeft: "1px solid #ccc"
  },
  header: {
    height: "50px",
    background: "white",
    borderBottom: "1px solid #ccc",
    width: "100%",
    boxShadow: "0 2px 2px -1px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  logo: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center"
  },
  close: {
    cursor: "pointer"
  },
  chatContainer: {
    padding: "1rem",
    overflowY: "auto",
    height: "calc(100vh - 130px)"
  },
  inputContainer: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "space-around",
    height: "80px"
  },
  inputBox: {
    width: "90%",
    height: "40px",
    borderRadius: "5px",
    fontSize: "14px",
    border: "1px solid #ccc",
    paddingLeft: "10px",
    outline: "none"
  }
}

export default style
