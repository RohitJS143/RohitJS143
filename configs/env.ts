import dotenv from 'dotenv'

dotenv.config({
  path: `.env.${process.env.ENV || 'dev'}`
})

export const ENV = {
  BASE_URL: process.env.BASE_URL,
  USERNAME: process.env.PIAZZA_EMAILID,
  PASSWORD: process.env.PIAZZA_PASSWORD
}