import { GetServerSideProps, NextPage } from 'next/types'
import Header from '../components/Header'
import Head from 'next/head'
import { Student } from '../typings'
import { useForm, SubmitHandler } from 'react-hook-form'
import { searchStudents } from '../services/searchServices'
import { useState } from 'react'

interface IFormInput {
  name: string
  _id: string
}

const SearchPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const [searchedStudents, setSearchedStudents] = useState<Student[]>([])

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    let responseData = await searchStudents(data.name, data._id)
    setSearchedStudents(responseData)
  }

  return (
    <main>
      <div className="flex h-screen flex-col">
        <div className="header-container w-full shrink bg-[#1a2c64]">
          <Head>
            <title>UET</title>
            <link rel="icon" href="favicon.ico" />
          </Head>
          <Header />
        </div>

        <div className="flex-1 bg-[url('/body.png')] bg-cover bg-fixed bg-no-repeat">
          {/* FORM */}
          <div className="mx-auto max-w-xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mb-4 rounded bg-[#1B1B1A] px-8 pt-6 pb-8 opacity-90 shadow-md"
            >
              <div className="m-4 flex justify-center">
                <h3 className="font-bold uppercase text-white">
                  Tra cứu thông tin tuyển sinh
                </h3>
              </div>

              <div className="mb-4 ">
                <label className="mb-2 block text-sm font-bold text-white">
                  Họ tên
                </label>
                <input
                  {...register('name', { required: true, minLength: 3 })}
                  className="w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow ring-gray-600 focus:outline-none focus:ring"
                  id="name"
                  type="text"
                  placeholder="Tìm kiếm theo tên học sinh"
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block text-sm font-bold text-white">
                  Mã học sinh
                </label>
                <input
                  {...register('_id', { required: true })}
                  className="mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow ring-gray-600 focus:outline-none focus:ring"
                  id="_id"
                  type="text"
                  placeholder="Tìm kiếm theo mã học sinh"
                />
                {/* errors when validation fails */}
                <div className="flex justify-between">
                  {errors.name && (
                    <span className="text-red-500">
                      Vui lòng nhập tên học sinh
                    </span>
                  )}
                  {errors._id && (
                    <span className="text-red-500">
                      Vui lòng nhập mã học sinh
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
                  type="submit"
                >
                  Tìm kiếm
                </button>
              </div>
            </form>
          </div>

          {/* TABLE */}
          <div className="relative mx-auto mt-10 ml-10 mr-10 max-w-screen-xl overflow-x-auto bg-[#1B1B1A] shadow-md">
            <table className="m-10 hidden w-full text-left font-serif text-sm text-gray-400 md:inline-table">
              <thead className="bg-[#1B1B1A] uppercase">
                <tr className="">
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    STT
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Trường Tiểu học
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Quận/Huyện
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Mã học sinh
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Lớp
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Họ và tên
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Ngày sinh
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Giới
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Nơi sinh
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Dân tộc
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Hộ khẩu thường trú
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Điện thoại liên hệ
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Tổng điểm năm lớp 1
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Tổng điểm năm lớp 2
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Tổng điểm năm lớp 3
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Tổng điểm năm lớp 4
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Tổng điểm năm lớp 5
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Tổng điểm kết quả 5 năm
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Điểm ưu tiên
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Tổng điểm sơ tuyển
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap border border-slate-500 px-6 py-3 text-base"
                  >
                    Ghi chú
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#1B1B1A]">
                  {searchedStudents.length === 0 ? (
                    <></>
                  ) : (
                    searchedStudents.map((item, i) => (
                      <tr key={i} className="dark:border-gray-700 dark:bg-gray-800">
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.stt}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.school}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.address}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.id}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.classroom}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.name}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.day}/{item.month}/{item.year}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.gender}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.place_of_birth}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.ethnic}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.address}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.phone}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.point_1}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.point_2}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.point_3}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.point_4}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.point_5}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.total_point_1}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.extra_point}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.total_point_2}
                        </th>
                        <th
                          scope="row"
                          className="whitespace-nowrap px-6 py-4 font-medium"
                        >
                          {item.note}
                        </th>
                      </tr>
                    ))
                  )}
              </tbody>
            </table>

            <p className="text-center text-xl italic text-red-500 md:hidden">
              Kết quả tra cứu không thể hiển thị trên điện thoại
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const post = null
//   if (!post) {
//     return {
//       notFound: true,
//     }
//   }
//   return {
//     props: {
//       post,
//     },
//   }
// }

export default SearchPage
