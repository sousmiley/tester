const axios = require('axios')
const { Client } = require('@notionhq/client')
// will need to : npm intsall axios and npm intsall @notionhq/client

const notion = new Client({auth: process.env.NOTION_KEY})