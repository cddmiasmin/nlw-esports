import express from "express";

const app = express()

//www.minhaapi.com/ads

app.get('/ads', () => {
  console.log('acessou Ads!')  
})

app.listen()