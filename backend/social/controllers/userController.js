const db = require("../database/db");

module.exports = {
    get: async (req, res) => {

        try {


            const data = await db('User_Profile').select()
            console.log(data)
            return res.status(200).json({
                data
            });

        } catch (err) {

            return res.status(200).json({
                error: "error"
            });

        }

    },
    getByID: async (req, res) => {

        try {
            const {id} = req.params
            const data = await db('User_Profile').where({id})
            console.log(data)
            return res.status(200).json({
                data
            });

        } catch (err) {

            return res.status(200).json({
                error: "error"
            });

        }

    },
    add: async (req, res) => {

        try {


            const {
                first_name,
                last_name,
                department,
                designation,
                tenant_id,
                image_url,
                city,
                country,
                bio,
                social_links,
                employee_id
            } = req.body
            console.log(req.body)
            const data = await db('User_Profile').insert({
                first_name: first_name,
                last_name: last_name,
                department: department,
                designation: designation,
                tenant_id: tenant_id,
                image_url: image_url,
                city: city,
                country: country,
                bio: bio,
                social_links: social_links,
                employee_id: employee_id
            })
            console.log(data)
            return res.status(200).json({
                data
            });

        } catch (err) {

            return res.status(200).json({
                error: "error"
            });

        }

    },
    update: async (req, res) => {
        const {
            first_name,
            last_name,
            department,
            designation,
            tenant_id,
            image_url,
            city,
            country,
            bio,
            social_links,
            employee_id
        } = req.body

        const {id} = req.params

        try {

            const data = await db('User_Profile').where({id})
                .update({
                    first_name: first_name,
                    last_name: last_name,
                    department: department,
                    designation: designation,
                    tenant_id: tenant_id,
                    image_url: image_url,
                    city: city,
                    country: country,
                    bio: bio,
                    social_links: social_links,
                    employee_id: employee_id
                })
            console.log(data)
            return res.status(200).json({
                data
            });

        } catch (err) {

            return res.status(200).json({
                error: "error"
            });

        }

    },
    delete: async (req, res) => {

        try {

            const data = await db('User_Profile').where({id}).del()
            console.log(data)
            return res.status(200).json({
                data
            });

        } catch (err) {

            return res.status(200).json({
                error: "error"
            });

        }

    },

}