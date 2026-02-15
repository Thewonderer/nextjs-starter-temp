export default function handler(req, res) {
  res.status(200).json({ 
    status: 'healthy',
    app: process.env.NEXT_PUBLIC_APP_NAME,
    timestamp: new Date().toISOString()
  });
}
