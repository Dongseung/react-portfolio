import logo from "./logo.svg";
// import './App.css';
import "./asset/css/reset.css";
import "./asset/css/global.css";
// import "./asset/css/styles.css";
import Visual from "./components/Visual";
import Video from "./components/Video";
import WorkList from "./components/WorkList";
import SkillList from "./components/SkillList";
import Footer from "./components/Footer";
import workData from "./data/data";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Header />
        <Visual />
        <Video />
        <WorkList data={workData} />
        <SkillList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
