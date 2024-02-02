// my

import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mlsfronrbreowdapsktn.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sc2Zyb25yYnJlb3dkYXBza3RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3NDY0OTksImV4cCI6MjAyMTMyMjQ5OX0.3lbvJUvvsHAyTS-ObnrFwJIl9tEdyOBDgXau7PW0T7c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
