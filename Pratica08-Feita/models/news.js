const axios = require('axios')
const cheerio = require('cheerio')
// const app = express(); // Construtor que inicializa uma aplicação Express
// app.use(express.json()); // Faz o parse (validação e interpretação) de solicitações do tipo application/json


// app.get('/', (req, res) => {
//     res.json('welcome to my F1 recente news API')
// })

const url = "https://www.theguardian.com/sport/lewis-hamilton"

// const articles = []
// axios(url)
//     .then((response) => {
//         const html = response.data
//         const $ = cheerio.load(html)

//         $('a:contains("Lewis")', html).each(function () {
//             const title = $(this).text()
//             const url = $(this).attr('href')
//             articles.push({
//                 title,
//                 url,

//             })
//         })
//         res.json(articles) 
//     }).catch((err) => console.log(err))
const articles = []
    axios.get(url)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)



            $('a:contains("Lewis")', html).each(function () {
                const title = $(this).text()
                const url = $(this).attr('href')
                articles.push({
                    title,
                    url,
                })
            })

                }).catch((err) => console.log(err))
            

exports.getNews = (req, res) => {
    res.json(articles)
}
