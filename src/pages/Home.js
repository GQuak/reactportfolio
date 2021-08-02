import React from "react";
import Project from "../components/Project";
import projects from "../projects.json";

const Home = () => {
  return (
    <main className="flex-shrink-0">
      <hr />
      <div className="container-fluid">
        <div className="row">
          <div class="extraSmall-screen col-md-1 hideLarge-screen"></div>
          <div class="col-xs-12 col-md-10 hideLarge-screen">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Who is Gabe Quakkelaar?</h3>
                <img
                  src="./assets/images/QFam.jpg"
                  class="card-img-top aboutImage"
                  alt="Gabe Quakkelaar's Family"
                ></img>
                <p class="about">
                  <br></br>I am a young business professional looking for a
                  software development role where I can take ownership by
                  embracing the role’s responsibilities while leveraging my
                  skills and experiences to find innovate solutions, drive
                  results-oriented outcomes, and exceed client’s expectations.
                  <br></br>I live in Brighton Colorado with my wife and
                  Australian Shepherd. We love to explore the mountains on trail
                  hikes only stopping for photos and dog treats.
                </p>

                <div class="experience">
                  <h4>Education</h4>

                  <h5>Full Stack Development</h5>
                  <p class="subtext">UNIVERSITY OF DENVER</p>
                  <div class="background">
                    <p class="cityDate">
                      2020 - Projected 2021 <br></br> Denver, CO
                    </p>

                    <p class="UofD">
                      I am currently studying in the University of Denver coding
                      bootcamp. My objective for the bootcamp was to refresh my
                      knowledge of software development languages and best
                      practices as well as expanding my knowledge to include
                      additional software languages.
                    </p>
                  </div>
                  <p class="spacer">
                    <br></br>
                  </p>

                  <h5>B.S. Computer Information Systems</h5>
                  <p class="subtext">CORNERSTONE UNIVERSITY</p>
                  <div class="background">
                    <p class="cityDate">
                      2014 - 2018 <br></br> Grand Rapids, MI
                    </p>

                    <p class="CU">
                      I graduated in 2018 with a double major in Business
                      Management and Computer Information Systems with a Finance
                      minor. I learned UI/UX design focused on web development
                      using HTML and CSS. I also learned database structure and
                      design based in C++ and SQL.
                    </p>
                  </div>
                </div>
                <p>
                  <br></br>
                </p>

                <div class="experience">
                  <h4>Work History</h4>
                  <h5>PPC Specialist</h5>
                  <p class="subtext">DAXKO</p>
                  <div class="background">
                    <p class="cityDate">
                      2020 - Present<br></br> Denver, CO
                    </p>
                    <ul>
                      <li>
                        Designs custom landing pages for digital marketing
                        campaigns, optimized for lead capture.
                      </li>
                      <li>
                        Managing multiple clients and projects simultaneously,
                        delivering custom marketing campaigns within the
                        established timeframe.
                      </li>
                      <li>
                        Developing reporting tools utilizing data pulled from
                        Facebook’s ad management platform to provide insights
                        driven by analytics.
                      </li>
                    </ul>
                  </div>
                  <p class="spacer">
                    <br></br>
                  </p>

                  <h5>Analyst, Customer Service</h5>
                  <p class="subtext">THE KELLOGG COMPANY</p>
                  <div class="background">
                    <p class="cityDate">
                      2019 - 2020 <br></br> Grand Rapids, MI
                    </p>
                    <ul>
                      <li>
                        Created seamless and satisfying internal and external
                        customer experience.
                      </li>
                      <li>
                        Proactively monitored all outbound orders from receipt
                        of PO to successful delivery of the products.
                      </li>
                      <li>
                        Resolved problems quickly and accurately to ensure
                        customers receive the highest level of service.
                      </li>
                    </ul>
                  </div>
                  <p class="spacer">
                    <br></br>
                  </p>

                  <h5>Digital Specialist</h5>
                  <p class="subtext">ADTEGRITY</p>
                  <div class="background">
                    <p class="cityDate">
                      2018 - 2019 <br></br> Grand Rapids, MI
                    </p>
                    <ul>
                      <li>
                        Led the onboarding & training process of an
                        international service partner to increase the efficiency
                        and workload capabilities of the team.
                      </li>
                      <li>
                        Created and managed digital marketing campaigns on a
                        variety of platforms that included Google Search &
                        Display, Facebook, Twitter, Linkedin, Snapchat, Spotify,
                        and Pandora.
                      </li>
                      <li>
                        Worked with companies that included Bissell, Spartan
                        Nash, Auto-Owners Insurance, and Notre Dame University.{" "}
                      </li>
                    </ul>
                  </div>
                  <p class="spacer">
                    <br></br>
                  </p>

                  <h5>Project Manager - Mobile App</h5>
                  <p class="subtext">THE ACTON INSTITUTE</p>
                  <div class="background">
                    <p class="cityDate">
                      2016 - 2018 <br></br> Grand Rapids, MI
                    </p>
                    <ul>
                      <li>
                        Managed the development of the 2017 & 2018 Acton
                        University App’s by creating the design to match the
                        existing branding guide, compiled thousands of pages of
                        resources into a single location, created a social
                        network platform for participants to connect.
                      </li>
                      <li>
                        The app was downloaded and used by over 1,000 attendees
                        from over 80 countries.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p>
              <br></br>
            </p>

            <div class="card">
              <div class="card-body formStyle">
                <header>
                  <h1 className="header">Contact Me</h1>
                </header>
                <hr />
                <iframe
                  title="Contact form"
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeofR-s5r5ni_aYcK_SyX5UuLjTnk_amYOEdlu2IIwuimkPzg/viewform?embedded=true"
                  width="640"
                  height="940"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                >
                  Loading…
                </iframe>
                <p>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
          <div class="extraSmall-screen col-md-1 hideLarge-screen"></div>
          <div class="large-screen col-lg-1"></div>
          <div class="large-screen col-lg-6">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title">Who is Gabe Quakkelaar?</h3>
                <img
                  src="./assets/images/QFam.jpg"
                  class="card-img-top aboutImage"
                  alt="Gabe Quakkelaar's Family"
                ></img>
                <p class="about">
                  <br></br>I am a young business professional looking for a
                  software development role where I can take ownership by
                  embracing the role’s responsibilities while leveraging my
                  skills and experiences to find innovate solutions, drive
                  results-oriented outcomes, and exceed client’s expectations.
                  <br></br>
                  <br></br>I live in Brighton Colorado with my wife and
                  Australian Shepherd. We love to explore the mountains on trail
                  hikes only stopping for photos and dog treats.
                </p>

                <div class="experience">
                  <h4>Education</h4>

                  <h5>Full Stack Development</h5>
                  <p class="subtext">UNIVERSITY OF DENVER</p>
                  <div class="background">
                    <p class="cityDate">
                      2020 - Projected 2021 <br></br>Denver, CO
                    </p>

                    <p class="UofD">
                      I am currently studying in the University of Denver coding
                      bootcamp. My objective for the bootcamp was to refresh my
                      knowledge of software development languages and best
                      practices as well as expanding my knowledge to include
                      additional software languages.
                    </p>
                  </div>
                  <p class="spacer">
                    <br></br>
                  </p>

                  <h5>B.S. Computer Information Systems</h5>
                  <p class="subtext">CORNERSTONE UNIVERSITY</p>
                  <div class="background">
                    <p class="cityDate">
                      2014 - 2018 <br></br> Grand Rapids, MI
                    </p>

                    <p class="CU">
                      I graduated in 2018 with a double major in Business
                      Management and Computer Information Systems with a Finance
                      minor. I learned UI/UX design focused on web development
                      using HTML and CSS. I also learned database structure and
                      design based in C++ and SQL.
                    </p>
                  </div>
                </div>
                <p>
                  <br></br>
                </p>

                <div class="experience">
                  <h4>Work History</h4>
                  <h5>PPC Specialist</h5>
                  <p class="subtext">DAXKO</p>
                  <div class="background">
                    <p class="cityDate">
                      2020 - Present<br></br> Denver, CO
                    </p>
                    <ul>
                      <li>
                        Designs custom landing pages for digital marketing
                        campaigns, optimized for lead capture.
                      </li>
                      <li>
                        Managing multiple clients and projects simultaneously,
                        delivering custom marketing campaigns within the
                        established timeframe.
                      </li>
                      <li>
                        Developing reporting tools utilizing data pulled from
                        Facebook’s ad management platform to provide insights
                        driven by analytics.
                      </li>
                    </ul>
                  </div>
                  <p class="spacer">
                    <br></br>
                  </p>

                  <h5>Analyst, Customer Service</h5>
                  <p class="subtext">THE KELLOGG COMPANY</p>
                  <div class="background">
                    <p class="cityDate">
                      2019 - 2020 <br></br> Grand Rapids, MI
                    </p>
                    <ul>
                      <li>
                        Created seamless and satisfying internal and external
                        customer experience.
                      </li>
                      <li>
                        Proactively monitored all outbound orders from receipt
                        of PO to successful delivery of the products.
                      </li>
                      <li>
                        Resolved problems quickly and accurately to ensure
                        customers receive the highest level of service.
                      </li>
                    </ul>
                  </div>
                  <p class="spacer">
                    <br></br>
                  </p>

                  <h5>Digital Specialist</h5>
                  <p class="subtext">ADTEGRITY</p>
                  <div class="background">
                    <p class="cityDate">
                      2018 - 2019 <br></br> Grand Rapids, MI
                    </p>
                    <ul>
                      <li>
                        Led the onboarding & training process of an
                        international service partner to increase the efficiency
                        and workload capabilities of the team.
                      </li>
                      <li>
                        Created and managed digital marketing campaigns on a
                        variety of platforms that included Google Search &
                        Display, Facebook, Twitter, Linkedin, Snapchat, Spotify,
                        and Pandora.
                      </li>
                      <li>
                        Worked with companies that included Bissell, Spartan
                        Nash, Auto-Owners Insurance, and Notre Dame University.{" "}
                      </li>
                    </ul>
                  </div>
                  <p class="spacer">
                    <br></br>
                  </p>

                  <h5>Project Manager - Mobile App</h5>
                  <p class="subtext">THE ACTON INSTITUTE</p>
                  <div class="background">
                    <p class="cityDate">
                      2016 - 2018 <br></br> Grand Rapids, MI
                    </p>
                    <ul>
                      <li>
                        Managed the development of the 2017 & 2018 Acton
                        University App’s by creating the design to match the
                        existing branding guide, compiled thousands of pages of
                        resources into a single location, created a social
                        network platform for participants to connect.
                      </li>
                      <li>
                        The app was downloaded and used by over 1,000 attendees
                        from over 80 countries.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="large-screen col-lg-1"></div>
          <div class="large-screen col-lg-3">
            <Project projects={projects} />
            <p>
              <br></br>
            </p>
            <div class="card">
              <div class="card-body formStyle">
                <button>Contact Me</button>
                <p>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
          <div class="large-screen col-lg-1"></div>
        </div>
        <p>
          <br></br>
        </p>
      </div>

      <hr />
    </main>
  );
};

export default Home;
