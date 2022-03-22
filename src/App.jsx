import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Tutoring from "./components/tutoring/Tutoring";
import Achievements from "./components/achievements/Achievements";
import Technology from "./components/technology/Technology";
import { Layout } from "./layout/Layout";

const App = () => {
    return <div>
        <Layout>
            <Intro/>
            <About/>
            <Achievements/>
            <Technology/>
            {/* <Tutoring/> */}
        </Layout>
    </div>
}

export default App;