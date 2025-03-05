"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import styles from "./SecretSnakeStyles"

const GRID_SIZE = 15
const CELL_SIZE = 15
const INITIAL_SNAKE = [{ x: 7, y: 7 }]
const INITIAL_DIRECTION = { x: 1, y: 0 }
const INITIAL_FOOD = { x: 11, y: 11 }

export default function SecretSnake() {
  const [snake, setSnake] = useState(INITIAL_SNAKE)
  const [direction, setDirection] = useState(INITIAL_DIRECTION)
  const [food, setFood] = useState(INITIAL_FOOD)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [playerName, setPlayerName] = useState("")
  const [leaderboard, setLeaderboard] = useState<Array<{ name: string; score: number }>>([])
  const gameAreaRef = useRef<HTMLDivElement>(null)

  const moveSnake = useCallback(
    (newDirection: { x: number; y: number }) => {
      if (gameOver) return

      setDirection(newDirection)

      const newSnake = [...snake]
      const head = { ...newSnake[0] }
      head.x += newDirection.x
      head.y += newDirection.y

      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true)
        return
      }

      if (newSnake.some((segment) => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true)
        return
      }

      newSnake.unshift(head)

      if (head.x === food.x && head.y === food.y) {
        setFood({
          x: Math.floor(Math.random() * GRID_SIZE),
          y: Math.floor(Math.random() * GRID_SIZE),
        })
        setScore((prevScore) => prevScore + 1)
      } else {
        newSnake.pop()
      }

      setSnake(newSnake)
    },
    [snake, food, gameOver],
  )

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameOver) return
      switch (e.key) {
        case "ArrowUp":
          moveSnake({ x: 0, y: -1 })
          break
        case "ArrowDown":
          moveSnake({ x: 0, y: 1 })
          break
        case "ArrowLeft":
          moveSnake({ x: -1, y: 0 })
          break
        case "ArrowRight":
          moveSnake({ x: 1, y: 0 })
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)

    const gameInterval = setInterval(() => moveSnake(direction), 200)

    return () => {
      window.removeEventListener("keydown", handleKeyPress)
      clearInterval(gameInterval)
    }
  }, [moveSnake, direction, gameOver])

  useEffect(() => {
    const storedLeaderboard = localStorage.getItem("snakeLeaderboard")
    if (storedLeaderboard) {
      setLeaderboard(JSON.parse(storedLeaderboard))
    }
  }, [])

  const handleSubmitScore = () => {
    if (playerName.trim() === "") return

    const newLeaderboard = [...leaderboard, { name: playerName, score }]
    newLeaderboard.sort((a, b) => b.score - a.score)
    setLeaderboard(newLeaderboard)

    localStorage.setItem("snakeLeaderboard", JSON.stringify(newLeaderboard))

    setPlayerName("")
  }

  const handleRestart = () => {
    setSnake(INITIAL_SNAKE)
    setDirection(INITIAL_DIRECTION)
    setFood(INITIAL_FOOD)
    setGameOver(false)
    setScore(0)
    setPlayerName("")
  }

  const handleControlClick = (newDirection: { x: number; y: number }) => {
    moveSnake(newDirection)
  }

  return (
    <div style={styles.gameContainer}>
      <div
        ref={gameAreaRef}
        style={{ ...styles.gameArea, width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}
        tabIndex={0}
      >
        {snake.map((segment, index) => (
          <div
            key={index}
            style={{
              ...styles.snakeSegment,
              ...(index === 0 ? styles.snakeHead : {}),
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
              width: CELL_SIZE,
              height: CELL_SIZE,
            }}
          />
        ))}
        <div
          style={{
            ...styles.food,
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
            width: CELL_SIZE,
            height: CELL_SIZE,
          }}
        />
      </div>
      <div style={styles.scoreBoard}>Score: {score}</div>
      {gameOver && (
        <div style={styles.gameOver}>
          <h2>Game Over!</h2>
          <p>Your score: {score}</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            style={styles.nameInput}
            autoFocus
          />
          <button onClick={handleSubmitScore} style={styles.button}>
            Submit Score
          </button>
          <button onClick={handleRestart} style={styles.button}>
            Restart Game
          </button>
        </div>
      )}
      <div style={styles.leaderboard}>
        <h3>Top 10 Scores</h3>
        <ul style={styles.leaderboardList}>
          {leaderboard.slice(0, 10).map((entry, index) => (
            <li key={index} style={styles.leaderboardItem}>
              {entry.name}: {entry.score}
            </li>
          ))}
        </ul>
      </div>
      <div style={styles.controlsContainer}>
        <div style={styles.controlRow}>
          <button style={styles.controlButton} onClick={() => handleControlClick({ x: 0, y: -1 })} aria-label="Move Up">
            ↑
          </button>
        </div>
        <div style={styles.controlRow}>
          <button
            style={styles.controlButton}
            onClick={() => handleControlClick({ x: -1, y: 0 })}
            aria-label="Move Left"
          >
            ←
          </button>
          <button
            style={styles.controlButton}
            onClick={() => handleControlClick({ x: 0, y: 1 })}
            aria-label="Move Down"
          >
            ↓
          </button>
          <button
            style={styles.controlButton}
            onClick={() => handleControlClick({ x: 1, y: 0 })}
            aria-label="Move Right"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}

