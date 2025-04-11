// server/middleware/log404.ts
export default defineEventHandler(async (event) => {
  const res = event.node.res
  res.on('finish', async () => {
    if (res.statusCode === 404 || res.statusCode === 500) {

      const config = useRuntimeConfig();

      await $fetch(`${config.public.backOptions.api}/log/error`, {
        method: 'POST',
        body: {
          url: getRequestURL(event).href,
          code: res.statusCode,
        }
      })
    }
  })
})
