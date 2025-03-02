import { string } from 'zod'
import dummyevents from '../dummyevents.json'
import ImageKit from 'imagekit'
import { events } from './schema'
import { config } from 'dotenv'
import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });

const imageKit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    urlEndpoint:process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!
})

const uploadToImageKit = async (url: string, fileName: string, folder:string) => {
    try{
        const response = await  imageKit.upload({
            file:url,
            fileName,
            folder
        })

        return response.filePath
    } catch(error) {
        console.log('error uploading to imagekit:', error)
    }
}

const seed = async () => {
    console.log('seeding data...')

    try {
for (const event of dummyevents){
    const coverUrl = await uploadToImageKit(event.coverUrl, `${event.title}.jpg`, "/events/covers") as string

    await db.insert(events).values({
        ...event,
        coverUrl,

    })
}
    } catch (error) {
        console.log('error seefing data', error)
    }
}

seed()