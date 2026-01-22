-- Insert categories
INSERT INTO public.tools_categories (name, description, icon) VALUES
  ('AI Tools', 'Artificial Intelligence powered tools', 'Brain'),
  ('Image Tools', 'Image processing and editing tools', 'Image'),
  ('Text Tools', 'Text processing and formatting tools', 'FileText'),
  ('Video Tools', 'Video editing and processing tools', 'Video'),
  ('Audio Tools', 'Audio processing and editing tools', 'Music'),
  ('Developer Tools', 'Tools for developers', 'Code')
ON CONFLICT DO NOTHING;

-- Insert sample tools
INSERT INTO public.tools (name, description, category_id, icon, is_premium) VALUES
  ('AI Text Generator', 'Generate high-quality text content with AI', (SELECT id FROM public.tools_categories WHERE name = 'AI Tools'), 'Sparkles', false),
  ('AI Image Generator', 'Create stunning images from text descriptions', (SELECT id FROM public.tools_categories WHERE name = 'AI Tools'), 'Wand2', true),
  ('Background Remover', 'Remove backgrounds from images instantly', (SELECT id FROM public.tools_categories WHERE name = 'Image Tools'), 'Eraser', false),
  ('Image Compressor', 'Compress images without losing quality', (SELECT id FROM public.tools_categories WHERE name = 'Image Tools'), 'Minimize2', false),
  ('Text Case Converter', 'Convert text to different cases', (SELECT id FROM public.tools_categories WHERE name = 'Text Tools'), 'Type', false),
  ('Word Counter', 'Count words, characters, and paragraphs', (SELECT id FROM public.tools_categories WHERE name = 'Text Tools'), 'Hash', false),
  ('Video Trimmer', 'Trim and cut your videos', (SELECT id FROM public.tools_categories WHERE name = 'Video Tools'), 'Scissors', false),
  ('Audio Converter', 'Convert audio files to different formats', (SELECT id FROM public.tools_categories WHERE name = 'Audio Tools'), 'Music', false),
  ('JSON Formatter', 'Format and validate JSON data', (SELECT id FROM public.tools_categories WHERE name = 'Developer Tools'), 'Braces', false),
  ('QR Code Generator', 'Generate QR codes for any text or URL', (SELECT id FROM public.tools_categories WHERE name = 'Developer Tools'), 'QrCode', false)
ON CONFLICT DO NOTHING;

COMMIT;
