import { Elysia } from 'elysia'
import { apollo, jit } from '../src/index'

import typeDefs from './schema'
import resolvers from './resolvers'

const app = new Elysia()
    .use(
        apollo({
            typeDefs,
            resolvers,
            context: async () => ({
                hi: 'there'
            })
        })
    )
    .listen(3000)

console.log(
    `🦊 Now foxing at http://${app.server?.hostname}:${app.server?.port}`
)
