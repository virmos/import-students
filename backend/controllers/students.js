import Student from '../models/student.js'

class StudentsControllers {
  /**
   * Get all students
   * @param {ctx} Koa Context
   */
  async find(ctx) {
    const name = ctx.request.query.name
    const id = ctx.request.query.id
    ctx.body = await Student.find({ id: id })
    if (ctx.body.length === 0) {
      ctx.body = await Student.find({ name: name })
    }
  }


  async add(ctx) {
    Student.db.dropCollection('students', function(err, result) {
      if (err) {
        console.log("collection doesn't exist so we don't delete")
      }
    });

    ctx.request.body.forEach(student => {
      let stt = student["STT"]
      let ethnic = student["Dân tộc"]
      let gender = student["Giới"]
      let name = student["Họ và tên"]
      let address = student["Hộ khẩu thường trú"]
      let classroom = student["Lớp"]
      let id = student["Mã học sinh"]
      let day = student["Ngày"]
      let month = student["Tháng"]
      let year = student["Năm"]
      let place_of_birth = student["Nơi sinh"]
      let school = student["Trường Tiểu học"]
      let point_1 = student["Tổng điểm năm lớp 1"]
      let point_2 = student["Tổng điểm năm lớp 2"]
      let point_3 = student["Tổng điểm năm lớp 3"]
      let point_4 = student["Tổng điểm năm lớp 4"]
      let point_5 = student["Tổng điểm năm lớp 5"]
      let total_point_1 = student["Tổng điểm kết quả 5 năm"]
      let total_point_2 = student["Tổng điểm sơ tuyển"]
      let extra_point = student["Điểm ưu tiên"]
      let phone = student["Điện thoại liên hệ"]
      let note = student["Ghi chú"]
      const newStudent = new Student({
        stt               ,         
        ethnic,
        gender ,
        name,
        address,
        classroom ,
        id,
        day ,
        month ,
        year ,
        place_of_birth,
        school,
        point_1,
        point_2,
        point_3,
        point_4,
        point_5,
        total_point_1,
        total_point_2,
        extra_point,
        phone,
        note,
      })
  
      newStudent.save()
    })

    ctx.body = { message: 'Students successfully added!' }
  }

  /**
   * Find one Student
   * @param {ctx} Koa Context
   */
  async findAndRemove(ctx) {
    // const {id} = ctx.request.body
    // const student = await Student.findAndRemove({ id });
    console.log('here')
  }
}

export default new StudentsControllers();