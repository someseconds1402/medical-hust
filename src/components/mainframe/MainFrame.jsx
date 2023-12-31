import FadeIn from "../effect/FadeIn";
import Sidebar from "../sidebar/Sidebar";

const MainFrame = ({ children }) => {
  return (
    <div>
        {/* <Sidebar/> */}
        <FadeIn>
          <div className="p-4 sm:ml-64 h-screen">
            {/* <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"> */}
              {children}
            {/* </div> */}
          </div>
        </FadeIn>
    </div>
  );
};

export default MainFrame;
