export function notFound(req, _res, next) {
  const err = new Error(`Route not found: ${req.method} ${req.originalUrl}`);
  err.status = 404; next(err);
}

export function errorHandler(err, _req, res, _next) {
  console.error(err);
  if (err.code === 11000) return res.status(409).json({ success:false, message:'An account with that email already exists' });
  if (err.name === 'ValidationError') return res.status(400).json({ success:false, message:'Please check the submitted fields' });
  const status = err.status || 500;
  res.status(status).json({ success:false, message: status === 500 ? 'Something went wrong. Please try again.' : err.message });
}
