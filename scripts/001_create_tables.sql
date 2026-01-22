-- Create tools_categories table
CREATE TABLE IF NOT EXISTS public.tools_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create tools table
CREATE TABLE IF NOT EXISTS public.tools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category_id UUID REFERENCES public.tools_categories(id) ON DELETE CASCADE,
  icon TEXT,
  url TEXT,
  is_premium BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.tools_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tools ENABLE ROW LEVEL SECURITY;

-- Public read policies (everyone can view tools and categories)
CREATE POLICY "Anyone can view categories" ON public.tools_categories FOR SELECT USING (true);
CREATE POLICY "Anyone can view tools" ON public.tools FOR SELECT USING (true);

COMMIT;
