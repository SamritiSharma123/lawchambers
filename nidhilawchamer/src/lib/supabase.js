import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://diwbarwbzsjtazwymtxj.supabase.co'
const supabaseKey = 'sb_publishable_dU4fi1p-OGqotCzDoabcZQ_OECHgsnH'

export const supabase = createClient(supabaseUrl, supabaseKey)