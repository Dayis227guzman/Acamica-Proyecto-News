import { connect } from "react-redux";
import News from "../components/News";
import { getNews, clearNews } from "../actions/actions";

const mapStateToProps = (state) => ({
  news: state.news,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
});

const mapDispatchToProps = (dispatch) => ({
  getNews: (path) => dispatch(getNews(path)),
  clearNews: () => dispatch(clearNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
