import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Adpted MIQ-3</h1>
        <h2>Overview</h2>
          <p>The MIQ-3 is the most recent version of the Movement Imagery Questionnaire (Hall & Pongrac, 1983) and the Movement Imagery Questionnaire-Revised (Hall & Martin, 1997). It is a 12-item questionnaire to assess ability to image four movements using internal visual imagery, external visual imagery, and kinesthetic imagery. The MIQ-3 has good psychometric properties, internal reliability, and predictive validity.</p>
          <a href="https://works.bepress.com/jennifer_cumming/27/">here</a> to download full paper.
          <h2>Instructions</h2>
            <p> 
            This questionnaire concerns two ways of mentally performing movements which are used by some people more than by others, and are more applicable to some types of movements than others.  The first is attempting to form a visual image or picture of a movement in your mind.  The second is attempting to feel what performing a movement is like without actually doing the movement.  You are requested to do both of these mental tasks for a variety of movements in this questionnaire, and then rate how easy/difficult you found the tasks to be. The ratings that you give are not designed to assess the goodness or badness of the way you perform these mental tasks. They are attempts to discover the capacity individuals’ show for performing these tasks for different movements. There are no right or wrong ratings or some ratings that are better than others. <br/><br/>
            Each of the following statements describes a particular action or movement.  Read each statement carefully and then actually perform the movement as described. Only perform the movement a single time. Return to the starting position for the movement just as if you were going to perform the action a second time. Then depending on which of the following you are asked to do, either (1) form as clear and vivid a visual image as possible of the movement just performed from an internal perspective (i.e., from a 1st person perspective, as if you are actually inside yourself performing and seeing the action through your own eyes), (2) form as clear and vivid a visual image as possible of the movement just performed from an external perspective (i.e., from a 3rd person perspective, as if watching yourself on DVD), or (3) attempt to feel yourself making the movement just performed without actually doing it.<br/><br/ >
            After you have completed the mental task required, rate the ease/difficulty with which you were able to do the task.  Take your rating from the following scale.  Be as accurate as possible and take as long as you feel necessary to arrive at the proper rating for each movement.  You may choose the same rating for any number of movements “seen” or “felt” and it is not necessary to utilize the entire length of the scale. 
            </p>
          <img src="C:\Users\Jonathan\Desktop\GitRepo\toast\toast\react-test\src\MIQ-3.png" alt="Rating Scale 1-7"></img>
          <footer> Reference: <br/> Williams, S. E., Cumming, J., Ntoumanis, N., Nordin-Bates, S. M., Ramsey, R., & Hall, C. (2012). Further validation and development of the Movement Imagery Questionnaire. Journal of Sport & Exercise Psychology, 34, 621-646.</footer>
      </div>
     );
  }
}

export default App;
