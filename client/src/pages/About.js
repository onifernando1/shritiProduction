require("../assets/styles/about.css");

function About() {
  return (
    <div className="about-container">
      <div className="about-title">my story</div>
      <img
        className="shriti-portrait"
        src={require("../assets/images/shritiportrait.jpg")}
      ></img>
      <div className="about-text">
        <p>
          {" "}
          Being almost entirely self-taught has proven to be a blessing, freeing
          me from conventional rules and expectations.{" "}
        </p>
        <p>
          {" "}
          Although innately drawn to art, I grew up in a family where art as a
          career was not encouraged. So I found myself at art evening classes at
          the Glasgow School of Art alongside my daytime dental course.{" "}
        </p>
        <p>
          However after qualifying and working as a dentist back in London, in
          2008, the sudden and unexpected loss of Chris, my husband, completely
          changed the course of my life.
        </p>
        <p>
          Leaving me a single parent to three children, it was a profound wake
          up call that life is short.
        </p>
        <p>
          {" "}
          Fifteen years on, I run a flourishing art business, selling both off
          the shelf and bespoke pieces of art. My art is an expression of my
          heart, often taking inspiration from life itself. People, emotions,
          nature-particularly the countryside, the river and the coast -all fuel
          my eclectic creations. My artistic style is as varied as my ranges
          from vibrant oil paintings with textured knife work to delicate
          monochromatic impressions in pen and ink and watercolor.{" "}
        </p>
        <p>
          {" "}
          Commissions hold a special place in my artistic journey, pushing me
          beyond my comfort zone and encouraging growth.
        </p>
        <p>
          More recently, the art workshops held in my garden studio, for both
          adults and younger people, have proved a life-affirming extension to
          my work. People from all walks of life, ages, backgrounds and cultures
          gather in small groups to uncover their own artistic creativity - for
          some it is an astonishing discovery! In addition to all this, I also
          practice craniosacral therapy, a meditative grounding technique which
          complements and enriches my creative process.{" "}
        </p>
        <p> Thank you for looking at my art, I hope you enjoy it. </p>
        <p>
          Please feel free to contact me with any questions. I look forward to
          hearing from you.
        </p>
        <p></p>
      </div>
    </div>
  );
}

export default About;
