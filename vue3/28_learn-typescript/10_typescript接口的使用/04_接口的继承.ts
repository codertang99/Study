interface IPerson {
  name: string,
  runnig: () => void
}

interface IAction {
  action: () => void
}

interface IStudent extends IPerson, IAction {
  sid: number
}

const info: IStudent = {
  name: "tang",
  sid: 10,
  runnig() {

  },
  action() {
    
  }
}