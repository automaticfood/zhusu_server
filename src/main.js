const express = require('express');
const fs = require('fs');
const JSONStream = require('JSONStream');

const app = express();
const port = 3000;

// 城市列表 JSON 数据文件路径
const cityList = './src/api/city/all.json';
const hotSuggests = './src/api/home/hotSuggests.json';


// 读取JSON数据文件
const readJsonFile = (jsonFile) => {
  try {
    const data = fs.readFileSync(jsonFile, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON file:', error.message);
    return {};
  }
};

app.get('/api/city/all', (req, res) => {
  // 启用 CORS
  res.header('Access-Control-Allow-Origin', '*');
  const jsonData = readJsonFile(cityList);
  res.json(jsonData);
});

app.get('/api/home/hotSuggests', (req, res) => {
  // 启用 CORS
  res.header('Access-Control-Allow-Origin', '*');
  const jsonData = readJsonFile(hotSuggests);
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}/api/city/all`)
})
