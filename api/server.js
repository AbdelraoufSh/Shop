const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');


app.use(cors());
app.use(express.json());
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));
app.get('/api/images', (req, res) => {
  const fs = require('fs');
  const uploadDir = path.join(__dirname, 'uploads');


  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading the uploads directory' });
    }
    const imageFiles = files.filter(file => {
      return file.match(/\.(jpg|jpeg|png|gif)$/i);
    });
    const imageUrls = imageFiles.map(file => `/api/uploads/${file}`);
    res.json(imageUrls);
  });
});
let  basket=[products=[],count=0,TotalPrice=0,counter=0];
let product='';
app.get('/api/products', async (req, res) => {
    try {
      res.json({
        products:[{name:'Card Title Test 1',sub:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi officiis vel ad animi provident quibusdam architecto perspiciatis blanditiis! Saepe totam ullam incidunt nihil ab reiciendis voluptatum beatae cumque consectetur illum.',price:65,quantity:1},
        {name:'Card Title Test 2',sub:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi officiis vel ad animi provident quibusdam architecto perspiciatis blanditiis! Saepe totam ullam incidunt nihil ab reiciendis voluptatum beatae cumque consectetur illum.',price:65,quantity:1},
        {name:'Card Title Test 3',sub:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi officiis vel ad animi provident quibusdam architecto perspiciatis blanditiis! Saepe totam ullam incidunt nihil ab reiciendis voluptatum beatae cumque consectetur illum.',price:65,quantity:1},
        {name:'Card Title Test 4',sub:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi officiis vel ad animi provident quibusdam architecto perspiciatis blanditiis! Saepe totam ullam incidunt nihil ab reiciendis voluptatum beatae cumque consectetur illum.',price:65,quantity:1},
        {name:'Card Title Test 5',sub:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi officiis vel ad animi provident quibusdam architecto perspiciatis blanditiis! Saepe totam ullam incidunt nihil ab reiciendis voluptatum beatae cumque consectetur illum.',price:65,quantity:1},
        {name:'Card Title Test 6',sub:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi officiis vel ad animi provident quibusdam architecto perspiciatis blanditiis! Saepe totam ullam incidunt nihil ab reiciendis voluptatum beatae cumque consectetur illum.',price:65,quantity:1},
        {name:'Card Title Test 7',sub:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi officiis vel ad animi provident quibusdam architecto perspiciatis blanditiis! Saepe totam ullam incidunt nihil ab reiciendis voluptatum beatae cumque consectetur illum.',price:65,quantity:1},
        {name:'Card Title Test 8',sub:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi officiis vel ad animi provident quibusdam architecto perspiciatis blanditiis! Saepe totam ullam incidunt nihil ab reiciendis voluptatum beatae cumque consectetur illum.',price:65,quantity:1},
        {name:'Card Title Test 9',sub:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi officiis vel ad animi provident quibusdam architecto perspiciatis blanditiis! Saepe totam ullam incidunt nihil ab reiciendis voluptatum beatae cumque consectetur illum.',price:65,quantity:1}]
        ,basket
        
    });  
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data!' });
    }
  });
  app.get('/api/getproduct',async (req,res)=>{
    res.json(
      {
        product
      }
    )
  });
app.post('/api/cart',(req,res)=>{
  basket=req.body;
     res.send('succed');
});
app.post('/api/product',(req,res)=>{
  product=req.body;
  res.send('succes');
});
app.post('/api/user',(req,res)=>{
  user=req.body;
  res.send(false);
  });

module.exports = (req,res) =>{
  app(req,res);
}
