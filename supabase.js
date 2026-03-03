// supabase.js

const SUPABASE_URL = "https://kzrhuultqwkamrhcgzpd.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_aJlrZB5OpBnIw6v5of7ZGA_7I3y7lIP";

// Create client
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);