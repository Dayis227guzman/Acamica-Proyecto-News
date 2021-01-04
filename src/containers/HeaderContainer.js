import { connect } from "react-redux";
import Header from "../components/Header";
import { search } from "../actions/actions";

const mapStateToProps = (state) => ({
  value: state.search
});

const mapDispatchToProps = (dispatch) => ({
  changeSearch: (e) => dispatch(search(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
