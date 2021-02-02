import Image from "./Image";

const Section = (propos) => {
  // component images

  return (
    <div className="section">
      <h2 className="category"> {propos.section.category}</h2>
      <div className="images">
        {propos.section.images.map((element, index) => {
          return <Image key={index} image={element} />;
        })}
      </div>
    </div>
  );
};
export default Section;
