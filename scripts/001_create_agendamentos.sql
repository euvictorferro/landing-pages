-- Create agendamentos table for storing consultation bookings
CREATE TABLE IF NOT EXISTS agendamentos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  telefone TEXT NOT NULL,
  email TEXT NOT NULL,
  mensagem TEXT,
  data_agendamento DATE NOT NULL,
  hora_agendamento TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pendente',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS but allow public inserts (no auth required for booking)
ALTER TABLE agendamentos ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public booking form)
CREATE POLICY "Allow public inserts" ON agendamentos 
  FOR INSERT 
  WITH CHECK (true);

-- Only allow authenticated users to view/update/delete (admin access)
CREATE POLICY "Allow authenticated select" ON agendamentos 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update" ON agendamentos 
  FOR UPDATE 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated delete" ON agendamentos 
  FOR DELETE 
  USING (auth.role() = 'authenticated');
