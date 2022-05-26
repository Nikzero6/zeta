import { BASE_URL, HEADERS } from "../../../apis/config";

export default async function handler(req, res) {
  if (req.method === "GET") {
    let data = null,
      statusCode = 200;
    try {
      data = await fetch(req.query.url, {
        headers: HEADERS,
        "Content-Type": "application/json"
      });
      data = await data.json();
      res.status(statusCode).json({
        data: data.data,
        statusCode,
        link: data?.paging?.next
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ detail: "server error" });
    }
  }
}
