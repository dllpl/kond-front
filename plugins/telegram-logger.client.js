export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:error', async (error) => {
    if(process.server) {
      await sendErrorToTelegram(error);
    }
  });
});

async function sendErrorToTelegram(error) {
  const config = useRuntimeConfig();

  const message = `
🚨 Nuxt Error:
Message: ${error.message}
URL: ${window.location.href}
Stack: ${error.stack}
  `;

  await $fetch(`https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: config.telegramChatId,
      text: message,
      parse_mode: 'Markdown',
    }),
  });
}
