
const { Client } = require('pg')
const client = new Client()

//const res = await client.query('SELECT $1::text as message', ['Hello world!'])
//console.log(res.rows[0].message) // Hello world!

client.connect()

export const add_ingredient = async (params) => {
    const name = params.name
    if (name === null){
        return {}
    }


    const query= 'INSERT INTO ingredients(name) VALUES($1) RETURNING *'
    const values= [name]

    let res={}
    try {
        const response = await client.query(query, values)
        console.log(response.rows[0])
        res=response.rows[0]
      } catch (err) {
        console.log(err.stack)
      } finally{
        return res
      }  
}

export const get_all = async () => {

    const query= 'SELECT * FROM ingredients;'
    let res={}
    try {
        const response = await client.query(query)
        console.log(response)
        res= response.rows
    }catch (err) {
        console.log(err.stack)
    }finally{
        return res
    }
}

export const get_by_id= async (params) => {

    const query= `SELECT * FROM ingredients where id=${params.ingredient_id};`
    let res={}
    try {
        const response = await client.query(query)
        console.log(response)
        res= response.rows[0]
    }catch (err) {
        console.log(err.stack)
    }finally{
        return res
    }
}