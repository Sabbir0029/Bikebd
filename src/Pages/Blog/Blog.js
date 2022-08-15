import React from "react";
import blog1 from "../../img/blog1 img.jpg";
import blog2 from "../../img/blog 2 img.jpg";
import blog3 from "../../img/blog 3 img.jpg";
import "../../Sharing/style.css";

const Blog = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row mb-5">
          <div className="col-md-6">
            <h1 className="text-end border-end border-danger border-2 px-3 ">
              KONW SOMETHING <br />
              <span className="text-danger">FROM THE BLOG</span>
            </h1>
          </div>
          <div className="col-md-6">
            <p className="lh-lg">
              L A T E S T N E W S <br />&<br />A B O U T U P D A T E B I K E S
            </p>
          </div>
        </div>
        {/*  */}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src={blog1} className="card-img-top blogimg" alt="..." />
              <div className="card-body">
                <p className="card-title">
                  <span className="text-danger fw-bold">TRAVEL</span> / POST BY
                  ADMIN
                </p>
                <h5 className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={blog2} className="card-img-top blogimg" alt="..." />
              <div className="card-body">
                <p className="card-title">
                  <span className="text-danger fw-bold">RIDING</span> / POST BY
                  ADMIN
                </p>
                <h5 className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={blog3} className="card-img-top blogimg" alt="..." />
              <div className="card-body">
                <p className="card-title">
                  <span className="text-danger fw-bold">CROSS-COUNTRY</span> /
                  POST BY ADMIN
                </p>
                <h5 className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
