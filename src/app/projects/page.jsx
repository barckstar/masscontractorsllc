import Image from "next/image";
import Statistics from "@/components/statistics";
import ContentView from "@/components/contentView";
import FillNav from "@/components/fillNav";

export default function projects() {
  return (
    <>
    <FillNav />
      <section className="bg-image-proyects">        
        <div className="w-5/6 mx-auto bg-white">
          <Statistics />
          <ContentView title={"Best Projects"}/>
          <ContentView title={"Recent Projects"}/>
        </div>
      </section>
    </>
  );
}
