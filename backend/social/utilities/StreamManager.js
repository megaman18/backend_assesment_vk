const db = require("../database/db");

const processMessage = async (kafkaMessage) => {

	// Start working here
    try {
        const stream = await kafkaMessage
        for await (const [key, value] of Object.entries(stream)) {
            console.log(stream['properties'].name)
            if (stream[key] === 'tenant_created'){
                const data = await db("tenant").insert({
                    id: stream['properties'].id,
                    tenant_name: stream['properties'].name,
                    address: JSON.stringify(stream['properties'].address),
                    city: stream['properties'].city,
                    state: stream['properties'].state,
                    country: stream['properties'].country,
                    zip_code:stream['properties'].zip_code,
                    phone: stream['properties'].phone,
                    web_url:stream['properties'].web_url,
                })
             } else {
                const data = await db("User_Profile").insert({
                    id: stream['properties'].id,
                    first_name: stream['properties'].first_name,
                    last_name: stream['properties'].last_name,
                    department: stream['properties'].department,
                    designation: stream['properties'].designation,
                    tenant_id: stream['properties'].tenant_id,
                    image_url: stream['properties'].image_url,
                    city: stream['properties'].city,
                    country: stream['properties'].country,
                    bio: stream['properties'].bio,
                    social_links:JSON.stringify(stream['properties'].social_links),
                    employee_id: stream['properties'].employee_id,

                })
            }

        }
        console.log('data inserted successfully')
    }catch (e) {
        console.log(e)
    }


};

module.exports = { processMessage };

