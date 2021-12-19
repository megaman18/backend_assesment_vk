const db = require("../database/db");

module.exports = {
    get: async (req, res) => {

        try {

            const data = await db('tenant').select()
            console.log(data)
            return res.status(200).json({
                data
            });

        } catch (err) {

            return res.status(200).json({
                error:"error"
            });

        }

    },
    getByID: async (req, res) => {

        try {
          const {id} =req.params
            const data = await db('tenant').where({id})
            console.log(data)
            return res.status(200).json({
                data
            });

        } catch (err) {

            return res.status(200).json({
                error:"error"
            });

        }

    },
    add: async (req, res) => {

        try {
           const {tenant_name,address,city,state,country,zip_code,phone,web_url} = req.body
            console.log(req.body)
            const data = await db('tenant').insert({
                tenant_name:tenant_name,
                address:JSON.stringify(address),
                city:JSON.stringify(city),
                state:JSON.stringify(state),
                country:JSON.stringify(country),
                zip_code:JSON.stringify(zip_code),
                phone:JSON.stringify(phone),
                web_url:JSON.stringify(web_url),
            })
            return res.status(200).json({
                data
            });

        } catch (err) {

            return res.status(500).json({
                error:"error"
            });

        }

    },
    update: async (req, res) => {

        const {id} =req.params
        const {tenant_name,address,city,state,country,zip_code,phone,web_url} = req.body
        try {
            const data = await db('tenant').where({ id })
                .update({
                    tenant_name:tenant_name,
                    address:address,
                    city:city,
                    state:state,
                    country:country,
                    zip_code:zip_code,
                    phone:phone,
                    web_url:web_url
                })
            console.log(data)
            return res.status(200).json({
                message:'data updated'
            });

        } catch (err) {

            return res.status(500).json({
                error:"error"
            });

        }

    },
    delete: async (req, res) => {

        try {

            const data = await db('tenant').where({ id }).del()
            console.log(data)
            return res.status(200).json({
                message:'data deleted'
            });

        } catch (err) {

            return res.status(500).json({
                error:"error"
            });

        }

    },

}