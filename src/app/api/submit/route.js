export async function POST(request) {
  const res = await request.json();

  console.log(res);

  return Response.json({ message: "Done" });
}
