import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hpagaumygroaddfhbpty.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwYWdhdW15Z3JvYWRkZmhicHR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyNjc4ODcsImV4cCI6MjAyODg0Mzg4N30.yCpCyiadC5KKIwnrj5Cq5TTUIAgv0JWd2AQXBhsaztA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
