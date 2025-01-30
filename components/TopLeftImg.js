import Image from "next/image";
const TopLeftImg = () => {
  return (<div className="absolute left-0 top-0 mix-blend-color-#000000 z-0 w-[200px] xl:w-[200px] h-[200px] opacity-70">
    <Image src='/top-left-green.jpg' width={200} height={200} alt=" hello" />
  </div>
  );
};

export default TopLeftImg;
