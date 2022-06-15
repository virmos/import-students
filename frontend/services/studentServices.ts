export async function importStudents(studentData:any) {
  const response = await fetch('http://localhost:3001/api/students', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(studentData),
  })
  const jsonResponse = await response.json()
  return jsonResponse.message
}
