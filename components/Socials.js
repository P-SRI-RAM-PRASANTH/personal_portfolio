import Link from "next/link";
import {RiLinkedinLine, RiInstagramLine, RiFacebookLine, RiTwitterFill} from 'react-icons/ri'
const Socials = () => {
  return(
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'http://www.linkedin.com/in/prasanth-padavala-029235289'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={'https://www.instagram.com/sriramprasanth_padavala/?utm_source=ig_web_button_share_sheet'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.facebook.com/pprasanthchandrashekhar'} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={'https://x.com/pPrasan80377885'} className="hover:text-accent transition-all duration-300">
        <RiTwitterFill />
      </Link>
    </div>
  );
};

export default Socials;
