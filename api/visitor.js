import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "counter.json");

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({ count: 0 }));
  }

  let data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  data.count += 1;
  fs.writeFileSync(filePath, JSON.stringify(data));

  res.status(200).json({ count: data.count });
}
