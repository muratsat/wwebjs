const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({
  authStrategy: new LocalAuth({
    dataPath: "./local_auth",
  }),
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

// Listening to all incoming messages
client.on("message", (message) => {
  console.log("[SERVER] Received a message:", message.body);
  message.reply(message.body);
});

client.initialize();
