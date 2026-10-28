import React from "react";


const TeamSection = () => {
  return (
    <section className="top_padding" id="por-card">
      <div className="container">

        {/* Page Heading */}
        <div className="section-header">
          <h2>Our Team & Management</h2>
          <p>
            Meet the passionate professionals and visionary leaders who drive our company forward.
            From technical experts to strategic decision-makers, our team is committed to excellence,
            innovation, and delivering the best solutions for our clients.
          </p>
        </div>

        {/* Management Section */}
        <div className="management-team d-flex">
          <h3>Management Team</h3>
          <div className="profile-card">
            <div className="img">
              <img src="https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg" alt="CEO" />
            </div>
            <div className="caption">
              <h4>John Anderson</h4>
              <p>Founder & CEO</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>

          <div className="profile-card">
            <div className="img">
              <img src="https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg" alt="COO" />
            </div>
            <div className="caption">
              <h4>Sarah Williams</h4>
              <p>Chief Operating Officer</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Team Section */}
        <div className="technical-team d-flex">
          <h3>Technical Team</h3>
          <div className="team-grid">
            <div className="profile-card">
              <div className="img">
                <img src="https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg" alt="Vin Diesel" />
              </div>
              <div className="caption">
                <h4>Vin Diesel</h4>
                <p>Senior App Developer</p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>

            <div className="profile-card">
              <div className="img">
                <img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt="David Corner" />
              </div>
              <div className="caption">
                <h4>David Corner</h4>
                <p>Front End Developer</p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>

            <div className="profile-card">
              <div className="img">
                <img src="https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg" alt="Tom Cruise" />
              </div>
              <div className="caption">
                <h4>Tom Cruise</h4>
                <p>Full Stack Developer</p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>

         

          
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
