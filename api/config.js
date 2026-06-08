export default function handler(req, res) {
  // This runs securely on Vercel's backend
  res.status(200).json({
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseAnonKey: process.env.api_key // Pulling exactly from your requested variable
  });
}