import Image from "./Image";

const Section = (propos) => {
  // component images
  const tab = propos.section.images.map((element, index) => {
    return <Image key={index} image={element} />;
  });

  return (
    <div className="section">
      <h2 className="category"> {propos.section.category}</h2>
      <div className="images">{tab}</div>
    </div>
  );
};
export default Section;
