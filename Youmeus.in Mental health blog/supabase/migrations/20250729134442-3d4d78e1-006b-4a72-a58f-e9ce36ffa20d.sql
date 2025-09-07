-- Create discussion rooms table
CREATE TABLE public.discussion_rooms (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  topic_category TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create chat messages table
CREATE TABLE public.chat_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  room_id UUID NOT NULL REFERENCES public.discussion_rooms(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  username TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.discussion_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for discussion rooms (public read access)
CREATE POLICY "Discussion rooms are viewable by everyone" 
ON public.discussion_rooms 
FOR SELECT 
USING (true);

CREATE POLICY "Users can create discussion rooms" 
ON public.discussion_rooms 
FOR INSERT 
WITH CHECK (true);

-- Create policies for chat messages (public read access for discussions)
CREATE POLICY "Chat messages are viewable by everyone" 
ON public.chat_messages 
FOR SELECT 
USING (true);

CREATE POLICY "Users can send chat messages" 
ON public.chat_messages 
FOR INSERT 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_discussion_rooms_updated_at
  BEFORE UPDATE ON public.discussion_rooms
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default discussion rooms
INSERT INTO public.discussion_rooms (name, description, topic_category) VALUES
('Mental Health Support', 'A safe space to discuss mental health challenges, coping strategies, and recovery journeys.', 'Mental Health Support'),
('Career & Education', 'Share experiences about work, studies, career transitions, and professional growth.', 'Career & Education'),
('Relationships & Family', 'Discuss relationship challenges, family dynamics, and building healthy connections.', 'Relationships & Family'),
('Personal Growth', 'Share your journey of self-improvement, goal setting, and personal development.', 'Personal Growth'),
('Creative Expression', 'Share your art, writing, music, and other creative outlets as forms of healing and expression.', 'Creative Expression'),
('Health & Wellness', 'Discuss physical health, fitness, nutrition, and overall wellness practices.', 'Health & Wellness');

-- Enable realtime for chat messages
ALTER TABLE public.chat_messages REPLICA IDENTITY FULL;
ALTER publication supabase_realtime ADD TABLE public.chat_messages;