import Image from "next/image";
import Link from "next/link";

const fillNav = () => {
  return (
    <>
      <section>
        <div className="py-4" style={{marginLeft:'4.5rem'}}>
            <Image src="/IMG_0271.png" width={200} height={75} alt="logo" />
        </div>
      </section>
    </>
  );
};

export default fillNav;
