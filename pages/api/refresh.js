export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        message: "Success"
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
