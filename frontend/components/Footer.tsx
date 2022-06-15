import Link from 'next/link'
import { NextPage } from 'next/types'

const Footer: NextPage = () => {
  return (
    <header className="mx-auto max-w-screen-xl cursor-pointer">
      <Link href="/search">
        <img className="w-full" src="https://uet.vnu.edu.vn/wp-content/uploads/2014/06/TUYEN-SINH-2022-1.jpg" width="1140" height="114" alt="TUYEN-SINH-2022" title="TUYEN-SINH-2022"></img>
      </Link>
    </header>
  )
}

export default Footer
