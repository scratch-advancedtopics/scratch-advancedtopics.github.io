import https from "https"
import fs from "fs"

function getUsers(type) {
    return new Promise(resolve => {
        function getData(offset) {
            return new Promise(resolve1 => {
                https.request({
                    hostname: "api.scratch.mit.edu",
                    port: 443,
                    path: "/studios/30152868/" + type + "?limit=40&offset=" + offset,
                    headers: {
                        "User-Agent": "Mozilla 5.0"
                    },
                    method: "GET"
                }, (res) => {
                    let data = []
        
                    res.on("data", data.push.bind(data))
                    res.on("end", () => resolve1(JSON.parse(Buffer.concat(data).toString())))
                }).end()
            })
        }

        (async () => {
            let currentOffset = 0
            let lastCount = 40
            const all = []
            while (lastCount === 40) {
                const data = await getData(currentOffset)
                all.push(...data)

                currentOffset += 40
                lastCount = data.length
            }
            resolve(all)
        })()
    })
} 

async function update() {
    const managers = await getUsers("managers")
    const curators = await getUsers("curators")

    const members = managers.concat(curators)

    fs.writeFileSync("src/lib/members.json", 
        JSON.stringify(members)
    )

    console.log(`Indexed ${members.length} - Managers: ${managers.length} | Curators: ${curators.length}`)
}

update()