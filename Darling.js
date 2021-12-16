const { WAConnection } = require(`@adiwajshing/baileys`);
const fs = require(`fs`);

async function iniciar () { 
        const Pike = new WAConnection()

        Pike.logger.level = `warn`

        Pike.on(`qr`, () => {
        })

        fs.existsSync(`./Darling.json`) && Pike.loadAuthInfo(`./Darling.json`)

        Pike.on(`connecting`, () => {
        console.log(`Conectando`)
        })

        Pike.on(`open`, () => {
        console.log(`Conectado exitosamente :D`)
        })
        await Pike.connect({timeoutMs: 100*1000})
        fs.writeFileSync(`./Darling.json`, JSON.stringify(Pike.base64EncodedAuthInfo(), null, `\t`))
        }

iniciar ()
.catch (err => console.log("unexpected error: " + err))
