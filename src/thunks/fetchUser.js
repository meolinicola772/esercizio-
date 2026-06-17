
import {
  addUser,
  setLoading,
  setError,
} from "../slices/usersSlice";

export const fetchUser = (username) => async (dispatch) => {

  dispatch(setLoading(true));

  dispatch(setError(null));

  try {

    const response = await fetch(
      `https://api.github.com/users/${username}`
    );

    if (!response.ok) {
      throw new Error("Utente non trovato");
    }

    const data = await response.json();

    dispatch(
      addUser({
        id: data.id,
        name: data.name,
        login: data.login,
      })
    );

  } catch (error) {

    dispatch(setError(error.message));

  } finally {

    dispatch(setLoading(false));

  }

};