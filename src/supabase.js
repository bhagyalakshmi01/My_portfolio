import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ljmxkuttppkjzirsmqhk.supabase.co";
const supabaseAnonKey = "sb_publishable_1Alk1o_CNw2ef7lST_hI2Q_f-lvzXKE";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
