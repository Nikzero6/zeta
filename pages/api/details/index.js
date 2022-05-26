import { BASE_URL, HEADERS } from "../../../apis/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    let data = null,
      statusCode = 200;
    try {
      data = await fetch(
        `${BASE_URL}/anime/${req.query.id}?fields=${req.query.fields}`,
        {
          headers: HEADERS,
          "Content-Type": "application/json"
        }
      );
      data = await data.json();
      res.status(statusCode).json({
        details: data,
        statusCode
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ detail: "server error" });
    }
  }
}
