import axios from "axios";

const handler = async (req, res) => {
  // console.log(`${process.env.API_URL}/${req.query.url}`)
  const response = await axios.post(`${process.env.API_URL}${req.query.url}`, req.body);

  res.status(response.status).json(response.data);
}

export default handler;