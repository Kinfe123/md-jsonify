import ProjectHeader from "@/components/project-header";
import { Board } from "@/components/project-track";

 const Featured = () => {
    return (
      <div className="h-screen max-w-7xl overflow-hidden bg-transparent mx-auto flex flex-col justify-start items-center text-neutral-50">

        <ProjectHeader />
        <Board />
      </div>
    );
  };
export default Featured