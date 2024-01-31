import { Room } from "@/app/models/room";
import sanityClient from "@/libs/sanity";
import * as queries from '@/libs/sanityQueries';

export async function getFeaturedRoom() {
    const result = await sanityClient.fetch<Room>(
        queries.getFeaturedRoomQuery,
        {},
        { 
            cache: 'no-cache'
        //     next: {
        //     revalidate: 1800 // in seconds --> 30 min, intervalled data fetching by next
        // }
    }
        );
        return result;
}