import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border p-2 m-2 border-black bg-pink-300 ">
      <h1 className="font-bold">{title}</h1>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="cursor-pointer underline"
        >
          {isVisible ? 'Hide' : 'Show'}
        </button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection,setVisibleSection] = useState("about");
  return (
    <>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About "}
        description={
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:"
        }
        isVisible={visibleSection == 'about'}
        setIsVisible={() => 
          setVisibleSection(visibleSection == 'about' ? "":'about')
        }
      />
      {/* <Section
        title={"Team"}
        description={
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:"
        }
        iisVisible={visibleSection == 'team'}
        setIsVisible={() => 
          setVisibleSection(visibleSection === 'team' ? "" : 'team')
        }
      /> */}
      <Section
        title={"Careers"}
        description={
          "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:"
        }
        isVisible={visibleSection == 'careers'}
        setIsVisible={() => 
          setVisibleSection(visibleSection == 'careers' ? "":'careers')
        }
      />
    </>
  );
};

export default Instamart;
