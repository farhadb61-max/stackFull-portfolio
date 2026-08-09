// Cloudflare Worker — Telegram contact relay
// Create Worker secrets named TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.
// Deploy this file as the Worker entry point and put its URL into ../script.js.
export default {
  async fetch(request, env) {
    const headers = {'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'Content-Type','Access-Control-Allow-Methods':'POST, OPTIONS','Content-Type':'application/json'};
    if (request.method === 'OPTIONS') return new Response('', {headers});
    if (request.method !== 'POST') return new Response(JSON.stringify({ok:false}), {status:405,headers});
    try {
      const body = await request.json();
      const name = String(body.name || '').trim().slice(0,120);
      const email = String(body.email || '').trim().slice(0,180);
      const subject = String(body.subject || 'Portfolio message').trim().slice(0,180);
      const message = String(body.message || '').trim().slice(0,4000);
      if (!name || !email || !message) return new Response(JSON.stringify({ok:false,error:'Missing fields'}), {status:400,headers});
      const text = `🔔 New Portfolio Message\n\n👤 Name: ${name}\n📧 Email: ${email}\n📌 Subject: ${subject}\n\n💬 Message:\n${message}`;
      const tg = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:env.TELEGRAM_CHAT_ID,text})});
      if (!tg.ok) return new Response(JSON.stringify({ok:false,error:'Telegram delivery failed'}), {status:502,headers});
      return new Response(JSON.stringify({ok:true}), {headers});
    } catch { return new Response(JSON.stringify({ok:false,error:'Invalid request'}), {status:400,headers}); }
  }
};
