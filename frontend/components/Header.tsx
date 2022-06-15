import Link from 'next/link'
import { NextPage } from 'next/types'

const Header: NextPage = () => {
  return (
    <header className="mx-auto flex max-w-screen-xl justify-center space-x-5 p-2 md:justify-between">
      <Link href="/">
        <img
          className="w-16 cursor-pointer object-contain"
          src="./logo.png"
          alt=""
        />
      </Link>

      <div className="hidden items-center space-x-10 font-sans md:inline-flex">
        <h3 className="whitespace-nowrap cursor-pointer text-white hover:text-blue-300">
          Giới thiệu
        </h3>
        <h3 className="whitespace-nowrap cursor-pointer text-white hover:text-blue-300">
          Đào tạo
        </h3>
        <h3 className="whitespace-nowrap cursor-pointer text-white hover:text-blue-300">
          Sinh viên
        </h3>
        <h3 className="whitespace-nowrap cursor-pointer text-white hover:text-blue-300">
          Khoa học - Công nghệ
        </h3>
        <h3 className="whitespace-nowrap cursor-pointer text-white hover:text-blue-300">
          Tuyển sinh
        </h3>
        <h3 className="whitespace-nowrap cursor-pointer text-white hover:text-blue-300">
          Khoa - Viện - Bộ môn
        </h3>
      </div>
    </header>
  )
}

export default Header
