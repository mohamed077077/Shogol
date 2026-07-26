import { get, set, del } from 'idb-keyval'
// Methods wraper indexdb

import type { Persister ,PersistedClient} from '@tanstack/react-query-persist-client'
export const queryCachePersister :Persister = {
    persistClient: async (client) => {
        await set('react-query-persist', client)
    },
    restoreClient: async () => {
        const data = await get('react-query-persist')
        return data as PersistedClient | undefined
    },
    removeClient: async () => {
        await del('react-query-persist')
    }
}