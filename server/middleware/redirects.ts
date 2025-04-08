import { readFileSync } from 'fs'
import { join } from 'path'

interface Redirect {
    before: string
    after: string
}

const redirects: Redirect[] = JSON.parse(
  readFileSync(join(process.cwd(), 'temp_redirects.json'), 'utf-8')
)

export default defineEventHandler((event) => {

    const url = getRequestURL(event)
    const redirect = redirects.find(r => r.before === url.origin + url.pathname)

    if (redirect) {
        return sendRedirect(event, redirect.after, 301) // 301 = permanent redirect
    }
})
