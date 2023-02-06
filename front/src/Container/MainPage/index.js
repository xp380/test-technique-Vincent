import { connect } from "react-redux";
import MainPage from "../../Components/MainPage";
import { allMovies } from "../../redux/index";

const mapStateToProps = (state) => ({
  all_movies: state.all_movies,
});

const mapDispatchToProps = (dispatch) => ({
  apiMovies: () => dispatch(allMovies()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
