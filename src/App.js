import "./App.css";
import HeaderComponent from "./components/header/header";
import MainContainer from "./components/main/mainContainer";
import classes from "./App.css";
import { connect } from "react-redux";

function App({ testStore, onTest, state }) {
  console.log(testStore);
  return (
    <div className="ghhg">
      <HeaderComponent></HeaderComponent>
      <MainContainer state={state}></MainContainer>
    </div>
  );
}

export default connect(
  (state) => ({
    testStore: state,
  }),
  (dispatch) => ({})
)(App);
