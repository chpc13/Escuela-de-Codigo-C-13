import React from "react";
import "./Career.css";

const Career = () => {
  return (
    <div className="Career-tittle">

      <section className="Frontend"><i className="ph-code-simple-fill"></i>
        <div>
          <img className="Frontend1"
            src="https://cdni.iconscout.com/illustration/premium/thumb/front-end-developer-doing-web-designing-4152245-3444401.png"
            alt="esta es una imagen de FRONTEND"/>
        </div>
        <h2>FRONTEND</h2>
      </section>

      <section className="Backend"><i className="ph-code-simple-fill"></i>
        <div>
          <img
            className="Backend1"
            src="https://unipython.com/wp-content/uploads/2020/07/fb.png"
            alt="esta es una imagen de BACKEND"
          />
        </div>
        <h2>BACKEND</h2>
      </section>

      <section className="Fullstack">
        <i className="ph-code-simple-fill"></i>
        <div>
          <img
            className="Fullstack1"
            src="https://miro.medium.com/max/1400/1*mcUdl7MoJDuNuGlhh8hMdQ.jpeg"
            alt="esta es una imagen de FULLSTACK"
          />
        </div>
        <h2>FULLSTACK</h2>
      </section>
    </div>
  );
};

export default Career;
