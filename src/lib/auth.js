import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// Removed the '!' operator here so JavaScript can parse it perfectly
const client = new MongoClient(process.env.MONGO_DB_URI);
const db = client.db(process.env.AUTH_DB_NAME);

export const auth = betterAuth({
    // Explicitly pass the secret key here
    secret: process.env.BETTER_AUTH_SECRET,

    emailAndPassword: {
        enabled: true,
    },
    database: mongodbAdapter(db, {
        client
    }),

    user: {
        additionalFields: {
            role: {
                default: "seeker"
            }
        }
    }

});