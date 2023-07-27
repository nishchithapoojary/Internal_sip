const About = () => {
    return (
      <>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <b> Easy coding</b> 
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              Welcome to our Learning platform!
              Here you can learn easily and in a effective manner.An easy learning platform is an integrated set of interactive online services that provide trainers, learners, and others involved in education with information, tools, and resources to support and enhance education delivery and management. One type of eLearning platform is a learning management system (LMS).
              There are many eLearning companies out there that offer online learning platforms. Some of these virtual learning environment platforms allow you to host and sell online courses, allowing you to run your own business. Other platforms simply offer an interface in which users can interact with your content but might not be the best fit for your audience. So how do you decide which platform is the best to host your training courses?
              In the end, you’re going to choose the eLearning platform that presents your course in an engaging way for your learners. To help you decide how to differentiate between different LMS options, we’ve created a shortlist of the most important aspects to consider when choosing the right platform.
  
              </div>
              <br>
              </br>
              <br>
              </br>
            </div>
            <center>
            <img src="https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-ladders-education-day_23-2149241014.jpg"></img><br></br>
  
            <img src="https://thumbs.dreamstime.com/b/kids-education-child-boy-study-school-thinking-bubble-dreaming-over-black-chalkboard-75214276.jpg"></img><br></br>
  
            <img src="https://cdn.elearningindustry.com/wp-content/uploads/2022/11/shutterstock_1798672534.jpg"></img><br></br>
  
            <img src="https://s2.research.com/wp-content/uploads/2020/07/24112622/debate1-1-1080x600.jpg"></img><br></br>
            </center>
          </div>
         
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Address
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>
                  UDUPI, <br></br>
                  MANGALORE,<br></br>
                 BANGALORE<br></br>
                </strong>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Contact details
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                 <br></br>
              
               
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default About;