"use client"
import Statistics from "@/components/statistics";
import ContentView from "@/components/contentView";
import Data from "@/lib/data.json";
import { Fade } from "react-awesome-reveal";

export default function projects() {
  return (
    <>
      <Fade>
        
        <section className="bg-image-proyects">
          <div className="w-5/6 mx-auto bg-white">
            <Statistics />
            <ContentView
              title={"Best Projects"}
              description={
                "From a beautiful commercial office space to detailed finishes in a large custom home, see more to check out our work. We believe our experience and knowledge of the industry will be a great benefit to you and your family. We would be honored to remodel or build your dream into a reality. We look forward to hearing from you!"
              }
              projects={Data.best_projects}
              hidden={false}
            />
            <ContentView
              title={"Recent Projects"}
              description={
                "From a beautiful commercial office space to detailed finishes in a large custom home, see more to check out our work. We believe our experience and knowledge of the industry will be a great benefit to you and your family. We would be honored to remodel or build your dream into a reality. We look forward to hearing from you!"
              }
              projects={Data.recent_projects}
              hidden={true}
            />
          </div>
        </section>
      </Fade>
    </>
  );
}
