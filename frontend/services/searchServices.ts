export async function searchStudents(name: string, id:string) {
  const response = await fetch('http://localhost:3001/api/students?' + new URLSearchParams({
    name: name,
    id: id
  }))
  const jsonResponse = await response.json()
  console.log(jsonResponse)
  return jsonResponse
}
