import Link from "next/link"
import { Btn } from '../Button';
import { formatConnected } from '../handlers';

export default function Navbar({setAddress, address, theme }) {

	return (
		<header className='absolute top-0 left-0 h-16 md:h-20 w-full px-6 md:px-20 flex flex-wrap items-center justify-between'>
      <Link href="/">
        <a>
          <img src="/logo.png" alt="swipswap logo" className="h-6 md:h-10" />
        </a>
      </Link>
      <Btn
        disabled={!!address}
        handleClick={setAddress}
        theme={theme.headerBtn}
        btnText={formatConnected(address)}
        className="h-7 md:h-10 w-32 md:w-40 text-xs md:text-base"
      />
		</header>
	);
}
