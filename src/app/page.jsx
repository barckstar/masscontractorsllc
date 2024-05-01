import Statistics from "@/components/statistics";
import Steps from "@/components/steps";
import HeroR from "@/components/heroR";
import HeroL from "@/components/heroL";

export default function Home() {
  return (
    <>
      <div className="video-container mt-0 ">
        <video autoPlay muted loop>
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-content">
          <h1 className="font-">Contenido sobre el video</h1>
          <p>Este es un ejemplo de contenido superpuesto sobre el video.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Botón 1
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Botón 2
          </button>
        </div>
      </div>
      <Statistics />
      <HeroL/>
      <Steps/>
      <HeroR/>
    </>
  );
}
