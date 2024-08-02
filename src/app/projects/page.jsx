"use client"
import Statistics from "@/components/statistics";
import ContentView from "@/components/contentView";
import { Navbar2 } from "@/components/navbar2";
import Data from "@/lib/data.json";
import { Fade } from "react-awesome-reveal";

export default function projects() {
  return (
    <>
      <Fade>
        <Navbar2 />
        <section className="bg-image-proyects">
          <div className="w-5/6 mx-auto bg-white">
            <Statistics />
            <ContentView
              title={"Best Projects"}
              description={
                "Street art subway tile salvia four dollar toast bitters selfiesquinoa yuccie synth meditation iPhone intelligentsia prism tofu.Viral gochujang bitters dreamcatcher."
              }
              projects={Data.best_projects}
            />
            <ContentView
              title={"Recent Projects"}
              description={
                "Street art subway tile salvia four dollar toast bitters selfiesquinoa yuccie synth meditation iPhone intelligentsia prism tofu.Viral gochujang bitters dreamcatcher."
              }
              projects={Data.recent_projects}
            />
          </div>
        </section>
      </Fade>
    </>
  );
}
