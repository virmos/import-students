import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useState, useCallback } from 'react'
import * as XLSX from 'xlsx'
import { importStudents } from "../services/studentServices"
import { WorkSheet } from 'xlsx'

const Home = () => {
  const [file, setFile] = useState<File>()
  const [importError, setImportError] = useState<boolean>(false)
  const [importSuccess, setImportSuccess] = useState<boolean>(false)
  
  const mapIndexToPropName = useCallback((index) => {
    switch (index) {
      case 0:
        return "STT";
      case 1:
        return "Trường Tiểu học";
      case 2:
        return "Quận/Huyện";
      case 3:
        return "Mã học sinh";
      case 4:
        return "Lớp";
      case 5:
        return "Họ và tên";
      case 6:
        return "Ngày";
      case 7:
        return "Tháng";
      case 8:
        return "Năm";
      case 9:
        return "Giới";
      case 10:
        return "Nơi sinh";
      case 11:
        return "Dân tộc";
      case 12:
        return "Hộ khẩu thường trú";
      case 13:
        return "Điện thoại liên hệ";
      case 14:
        return "Tổng điểm năm lớp 1";
      case 15:
        return "Tổng điểm năm lớp 2";
      case 16:
        return "Tổng điểm năm lớp 3";
      case 17:
        return "Tổng điểm năm lớp 4";
      case 18:
        return "Tổng điểm năm lớp 5";
      case 19:
        return "Tổng điểm kết quả 5 năm";
      case 20:
        return "Điểm ưu tiên";
      case 21:
        return "Tổng điểm sơ tuyển";
      case 22:
        return "Ghi chú";
      default:
        return "err";
    }
  }, [])

  const handleFileSubmit = useCallback((e) => {
    e.preventDefault()

    if (file) {
      let reader = new FileReader();
      reader.onload = function (e) {
          /* read workbook */
          let bstr = e.target!.result;
          let workbook = XLSX.read(bstr, { type: 'binary' });
          let studentData:any[] = []
          
          workbook.SheetNames.forEach(function (workSheetName, index) {
          /* for each sheet, grab a sheet name */
              const OFFSET_TO_TABLE = 5
              const OFFSET_TO_SHEETNAME = 3

              let sheetName = workbook.SheetNames[index]
              let workSheet = workbook.Sheets[sheetName]
              let excelData:WorkSheet = (XLSX.utils.sheet_to_json(workSheet, { header: 1 }))

              const numCols = excelData[OFFSET_TO_SHEETNAME].length
              const numberOfRecord = parseInt(workSheet["!ref"]!.split("W")[1]) - OFFSET_TO_TABLE

              for (let row = 0; row <  numberOfRecord; row++) {
                let student :any = {}
                for (let col = 0; col < numCols; col++) {
                  student[mapIndexToPropName(col)] = excelData[row + 5][col]
                }
                studentData.push(student)
              }
          })
          importStudents(studentData).then(response => {
            setImportSuccess(true)
            alert("Import success!")
          })
          
      }
      reader.readAsBinaryString(file)
    } else {
      setImportError(true)
      alert("Import error!")
    }
  }, [file])

  return (
    <div className="flex h-screen flex-col">
      <div className="header-container w-full shrink bg-[#1a2c64]">
        <Head>
          <title>UET</title>
          <link rel="icon" href="favicon.ico" />
        </Head>
        <Header />
      </div>

      <div className="flex flex-1 bg-[url('/body2.png')] bg-cover bg-no-repeat">
        <div className="ml-10 mr-10 hidden h-full flex-col space-y-5 bg-[#1B1B1A] p-10 opacity-70 md:ml-32 md:inline-flex md:max-w-sm xl:max-w-md">
          <div className="flex space-x-5">
            <label className="group overflow-hidden" >
              <img
                src="https://uet.vnu.edu.vn/wp-content/uploads/2022/06/ava-aun-120x80.jpg"
                className="w-24 cursor-pointer object-cover transition-transform
                duration-200 ease-in-out hover:scale-105"
                title="Chương trình đào tạo Mạng máy tính và truyền thông dữ liệu của Trường Đại học Công nghệ, đạt chứng nhận chất lượng theo tiêu chuẩn AUN-QA"
                alt="Chương trình đào tạo Mạng máy tính và truyền thông dữ liệu của Trường Đại học Công nghệ, đạt chứng nhận chất lượng theo tiêu chuẩn AUN-QA"
              />
            </label>
            <p className="flex-1 cursor-pointer text-white hover:text-blue-400">
              Trang web được tạo bởi sinh viên Khoa học máy tính của Trường Đại
              học Công nghệ đạt chứng nhận chất lượng theo tiêu chuẩn AUN-QA
            </p>
          </div>

          <div className="flex space-x-5">
            <label className="group overflow-hidden" >
              <img
                src="https://uet.vnu.edu.vn/wp-content/uploads/2022/05/z3455952704815_e8352e6f0f4b3a4c41a5a4d0965aa212-120x80.jpg"
                className="w-24 cursor-pointer object-cover transition-transform
                duration-200 ease-in-out hover:scale-105"
                title="Chương trình đào tạo Mạng máy tính và truyền thông dữ liệu của Trường Đại học Công nghệ, đạt chứng nhận chất lượng theo tiêu chuẩn AUN-QA"
                alt="Chương trình đào tạo Mạng máy tính và truyền thông dữ liệu của Trường Đại học Công nghệ, đạt chứng nhận chất lượng theo tiêu chuẩn AUN-QA"
              />
            </label>
            <p className="flex-1 cursor-pointer text-white hover:text-blue-400">
              Trang web được sử dụng trong mục đích quản lý học sinh
            </p>
          </div>

          <div className="flex space-x-5">
            <label className="group overflow-hidden" >
              <img
                src="https://uet.vnu.edu.vn/wp-content/uploads/2022/06/19789-1-120x80.jpg"
                className="w-24 cursor-pointer object-cover transition-transform
                duration-200 ease-in-out hover:scale-105"
                title="Chương trình đào tạo Mạng máy tính và truyền thông dữ liệu của Trường Đại học Công nghệ, đạt chứng nhận chất lượng theo tiêu chuẩn AUN-QA"
                alt="Chương trình đào tạo Mạng máy tính và truyền thông dữ liệu của Trường Đại học Công nghệ, đạt chứng nhận chất lượng theo tiêu chuẩn AUN-QA"
              />
            </label>
            <p className="flex-1 cursor-pointer text-white hover:text-blue-400">
              Trường ĐH Công nghệ phát triển thiết bị giao tiếp cho người mất khả năng nói – BLife
            </p>
          </div>
        </div>

        <div className=" max-w-xl flex items-center">
          <form onSubmit={handleFileSubmit} className="mb-4 rounded bg-[#1B1B1A] px-8 pt-6 pb-8 opacity-90 shadow-md">
            <div className="m-4 flex justify-center">
              <h3 className="font-bold uppercase text-white">
                Tra cứu thông tin tuyển sinh
              </h3>
            </div>

            <input
              id="fileUploadInput"
              type="file"
              accept=".xlsx"
              className="mt-5 mb-5 text-white space-x-5"
              onChange={(e) => setFile(e.target.files![0])}
            />

            <div className="w-100 flex justify-center">
              <button type="submit" className=" text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Submit</button>
            </div>
          </form>
        </div>
      </div>

      <div className="footer-container w-full shrink bg-[#2175ad]">
        <Footer />
      </div>
    </div>
  )
}

export default Home
