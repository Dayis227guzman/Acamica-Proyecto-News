export const loadingError = (bool) => ({
  type: "LOADING_ERROR",
  hasErrored: bool
});

export const loadingInProgress = (bool) => ({
  type: "LOADING_IN_PROGRESS",
  isLoading: bool
});

export const loadingSuccess = (news) => ({
  type: "LOADING_SUCCESS",
  news
});

export const search = (e) => ({
  type: "CHANGE_SEARCH",
  value: e.target.value
});

export const clearNews = (news) => ({
  type: "CLEAR_NEWS",
  news
});

export const getNews = (path) => {
  let URL = "";
  if (path.includes("search")) {
    URL = `https://api.canillitapp.com${path}`;
  }
  if (path.length < 6) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    URL = `https://api.canillitapp.com/latest/${year}-${month}-${day}`;
  }

  if (path.includes("Internacionales")) {
    URL = "https://api.canillitapp.com/news/category/2";
  }
  if (path.includes("Tecnologia")) {
    URL = "https://api.canillitapp.com/news/category/3";
  }
  if (path.includes("Espectaculos")) {
    URL = "https://api.canillitapp.com/news/category/4";
  }
  if (path.includes("Deportes")) {
    URL = "https://api.canillitapp.com/news/category/5";
  }
  if (path.includes("Diseno")) {
    URL = "https://api.canillitapp.com/news/category/6";
  }

  return (dispatch) => {
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadingInProgress(false));
        return response;
      })
      .then((response) => response.json())
      .then((news) => dispatch(loadingSuccess(news)))
      .catch(() => dispatch(loadingError(true)));
  };
};
