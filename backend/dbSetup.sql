-- Create DB
CREATE DATABASE nativechat;
\c nativechat

-- Install UUID extension if not available
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- User table
CREATE TABLE IF NOT EXISTS Users(
    user_id UUID DEFAULT uuid_generate_v4() NOT NULL,
    username CHARACTER VARYING(50) NOT NULL,
    email CHARACTER VARYING(255) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    user_image TEXT,
    CONSTRAINT pk_user_id PRIMARY KEY(user_id)
);

CREATE TABLE IF NOT EXISTS Messages(
    message_id UUID DEFAULT uuid_generate_v4() NOT NULL,
    from_user UUID NOT NULL REFERENCES Users(user_id) ON DELETE CASCADE,
    to_user UUID NOT NULL REFERENCES Users(user_id) ON DELETE CASCADE,
    message_content TEXT NOT NULL,
    sent_time TIMESTAMPTZ DEFAULT NOW() NOT NULL
);