import studentsRouter from '../routes/students.js'

// hardcoded, should use dirname to get all the files
export default async function(dirname) {
  const routes = [studentsRouter]
  return routes
} 