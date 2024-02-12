import ProjectHeader from "@/components/project-header";
import { Board } from "@/components/project-track";

 const Featured = () => {
    return (
      <div className="h-screen w-full overflow-hidden bg-transparent mx-auo flex flex-col justify-center items-center text-neutral-50">

        <ProjectHeader />
        <Board />
      </div>
    );
  };
export default Featured