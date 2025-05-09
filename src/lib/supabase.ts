import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uoiwabztkcspjbqbemve.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvaXdhYnp0a2NzcGpicWJlbXZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDk2NDMsImV4cCI6MjA2MjM4NTY0M30.Su-cJmqblI7VwYLRvxLtrm65xYSV-DP7owT7eUjyouw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
