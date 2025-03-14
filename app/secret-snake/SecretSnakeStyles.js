const styles = {
  gameContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "20px",
    boxSizing: "border-box",
  },
  gameArea: {
    width: "225px",
    height: "225px",
    border: "2px solid #333",
    position: "relative",
    backgroundColor: "#f0f0f0",
    outline: "none",
  },
  snakeSegment: {
    width: "15px",
    height: "15px",
    position: "absolute",
    backgroundColor: "#4caf50",
    borderRadius: "50%",
  },
  snakeHead: {
    backgroundColor: "#45a049",
  },
  food: {
    width: "15px",
    height: "15px",
    position: "absolute",
    backgroundColor: "#ff5722",
    borderRadius: "50%",
  },
  scoreBoard: {
    marginTop: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  gameOver: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    zIndex: 1000,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  },
  nameInput: {
    margin: "10px 0",
    padding: "5px",
    width: "100%",
    fontSize: "16px",
  },
  button: {
    margin: "5px",
    padding: "10px 20px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  leaderboard: {
    marginTop: "20px",
    textAlign: "center",
  },
  leaderboardList: {
    listStyleType: "none",
    padding: 0,
  },
  leaderboardItem: {
    marginBottom: "5px",
  },
  controlsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  controlRow: {
    display: "flex",
    justifyContent: "center",
  },
  controlButton: {
    width: "60px",
    height: "60px",
    margin: "5px",
    fontSize: "24px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    userSelect: "none",
    touchAction: "manipulation",
  },
}

export default styles

