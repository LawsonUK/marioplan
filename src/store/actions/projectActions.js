import { firestore } from "../../config/fbConfig"

export const createProject = project => {
  // middleware thunk function
  return (dispatch, getState, { getFirebase, getFireStore }) => {
    // make async call to database
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Claire",
        authorLastName: "Lawson",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project })
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err })
      })
  }
}
