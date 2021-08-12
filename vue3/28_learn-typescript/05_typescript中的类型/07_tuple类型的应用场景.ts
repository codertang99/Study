function useState<T>(state: T) :[T, (newState: T) => void] {
  let currState = state
  const changeState = (newState: T) => {
    currState = newState
  }

  const tuple: [T, (newState: T) => void] = [currState, changeState]

  return tuple

}

const [title, setTitle] = useState("tang")