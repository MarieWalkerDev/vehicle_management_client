export const SOMETHING_RECEIVED = 'SOMETHING_RECEIVED';
export function fetchSomething() {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:8080/api/v1`)
    const json = await response.json()
    dispatch({
      type: SOMETHING_RECEIVED,
      posts: json._embeded.posts
    });
  };
};
