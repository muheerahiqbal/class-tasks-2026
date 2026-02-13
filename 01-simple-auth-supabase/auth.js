// my auth.js
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase_URL = "https://ggswphpfuriegzpppwyu.supabase.co";
const supabase_Anon_Key = "sb_publishable_2I_Nztm5zlj6YBIRAzqkCw_Up82W6Do";

const supabase = createClient(supabase_URL, supabase_Anon_Key);

export { supabase };
