const express = require('express');
const fs = require('fs');
const JSONStream = require('JSONStream');

const app = express();
const port = 3000;

// JSON数据文件路径
const cityList = './src/api/city/all.json';

// 读取JSON数据文件
const readJsonFile = () => {
  try {
    const data = fs.readFileSync(cityList, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON file:', error.message);
    return {};
  }
};

app.get('/api/city/all', (req, res) => {
  // 启用 CORS
  res.header('Access-Control-Allow-Origin', '*');
  const jsonData = readJsonFile();
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}/api/city/all`)
})
