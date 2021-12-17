const { WAConnection } = require(`@adiwajshing/baileys`);
const fs = require(`fs`);
const ment = require("moment-timezone");
const { color } = require('./lib/color');
prefix = '-'
const vcard = 'BEGIN:VCARD\n'
                +'VERSION:3.0\n'
                +'FN:Pikenny\n'
                +'ORG:ThisIsPikenny\n'
                +'TEL;type=CELL;type=VOICE;waid=51966653383:+51 966 653 383\n'
                +'END:VCARD'


async function iniciar () { 
        const Pike = new WAConnection()

        Pike.logger.level = `warn`
    Cfonts.say('Neko-Chan', {
    colors: ['#3F1665'],
    font: 'block',
    align: 'center', //'center'
    })
    

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
