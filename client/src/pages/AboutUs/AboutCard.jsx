import "./CardSection.css";

const CardSection = () => {
  return (
    <div className="card-section">
      <h2>Token Tycoon Territory: Dive into the World of Roohoof Rascals</h2>
      <div className="cards-container">
        
        <div className="card">
          <h3 className="text-yellow">Discovery of Roohoof Rascals</h3>
          <ul>
            <li>
              <strong>Brainstorming Sessions:</strong> The team brainstormed,
              drawing inspiration from mythology, folklore, and modern pop
              culture. This creative process led to the initial sketches and
              concepts of the Roohoof Rascals.
            </li>
            <li>
              <strong className="text-yellow">Character Design:</strong> The
              lead artist crafted whimsical and mythical characters, each with a
              unique personality and visual appeal, ensuring they stood out in
              the digital landscape.
            </li>
            <li>
              <strong className="text-yellow">
                Development and Refinement:
              </strong>{" "}
              Through focus groups and iterative design, the characters evolved
              to resonate with collectors and fans.
            </li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-yellow">Building the Ecosystem</h3>
          <ul>
            <li>
              <strong className="text-yellow">Blockchain Integration:</strong>{" "}
              The team chose an eco-friendly blockchain platform, developing
              smart contracts for secure, transparent transactions and seamless
              trading of Roohoof Rascals.
            </li>
            <li>
              <strong className="text-yellow">Community Involvement:</strong>{" "}
              Engaging early supporters, the team built a loyal following
              through social media, AMA sessions, and discussion forums,
              creating a vibrant community even before the official launch.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
