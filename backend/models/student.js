import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const studentSchema = new mongoose.Schema({
  stt: {
    type: Number,
    required: true,
  },
  ethnic: {
    type: String,
  },
  gender: {
    type: String,
  },
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  classroom: {
    type: String,
  },
  id: {
    type: String,
  },
  day: {
    type: String,
  },
  month: {
    type: String,
  },
  year: {
    type: String,
  },
  place_of_birth: {
    type: String,
  },
  school: {
    type: String,
  },
  point_1: {
    type: Number,
  },
  point_2: {
    type: Number,
  },
  point_3: {
    type: Number,
  },
  point_4: {
    type: Number,
  },
  point_5: {
    type: Number,
  },
  total_point_1: {
    type: Number,
  },
  total_point_2: {
    type: Number,
  },
  extra_point: {
    type: Number,
  },
  phone: {
    type: String,
  },
  note: {
    type: String,
  },
})
studentSchema.plugin(uniqueValidator)

// studentSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString()
//     delete returnedObject._id
//     delete returnedObject.__v
//   }
// })

const Student = mongoose.model('Student', studentSchema)

export default Student
