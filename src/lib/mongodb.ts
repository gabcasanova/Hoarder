// This file handles the connection to MongoDB using Mongoose.
// It ensures that only a single connection is created and reused
// across multiple API calls or serverless function invocations, 
// avoiding performance issues and connection limits.

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Use a global cache to store the connection across module reloads
// This prevents creating a new connection each time the file is imported
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,    // Stores the resolved connection
    promise: null, // Stores the ongoing connection promise (while connecting)
  };
}

/**
 * Connects to MongoDB using Mongoose.
 * If a cached connection or promise exists, it reuses it.
 * This function should be called before any DB operation.
 */
async function connectMongoDB() {
  if (cached.conn) return cached.conn; // If already connected, return the existing connection

  if (!cached.promise) { // If a connection is in progress, wait for it
    // Create a new connection and cache the promise
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log("Connected to MongoDB");
      return mongoose;
    });
  }

  // Await the connection and store the resolved connection in the cache
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectMongoDB;