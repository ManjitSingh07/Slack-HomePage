import "./App.css";
import AllBrands from "./Components/Brands/AllBrands";
import PageFooter from "./Components/Footer/PageFooter";
import PageHeader from "./Components/Header/PageHeader";
import MiddleDataComponent from "./Components/MiddleComponent/MiddleDataComponent";
import NavigationBar from "./Components/Navbar/NavigationBar";
import VideoTextDataComponent from "./Components/VideoTextComponent/VideoTextDataComponent";
import WelcomePageComponent from "./Components/WelcomeComponent/WelcomePageComponent";
import video1 from "./Assets/video1.webm";
import video2 from "./Assets/video2.webm";
import video3 from "./Assets/video3.webm";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <PageHeader/>
      <AllBrands  />
      <VideoTextDataComponent
        video={video1}
        heading="Bring your team together"
        text="At the heart of Slack are channels: organized spaces for everyone and everything you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies."
        learnMore="Learn more about channels"
        left={true}
      />
      <VideoTextDataComponent
        video={video2}
        heading="Choose how you want to work"
        text="In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live."
        learnMore="Learn more about flexible communication"
        left={false}
      />
      <VideoTextDataComponent
        video={video3}
        heading="Move faster with your tools in one place"
        text="With your other work apps connected to Slack, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks."
        learnMore="Learn more about the Slack platform"
        left={true}
      />


      <MiddleDataComponent />
      <WelcomePageComponen />
      <PageFooter />
    </div>
  );
}

export default App;
