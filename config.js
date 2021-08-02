// Autodesk Forge configuration
module.exports = {
    // Set environment variables or hard-code here
    credentials: {
        client_id: 'K1vT77ZSAIMoW4YQgYf2LjeFAeGka8GN',
        client_secret: 'fBw6hGGGE017CPDA',
        callback_url: 'http://localhost:3000/api/forge/callback/oauth'
    },
    scopes: {
        // Required scopes for the server-side application
        internal: ['bucket:create', 'bucket:read', 'data:read', 'data:create', 'data:write'],
        // Required scope for the client-side viewer
        public: ['viewables:read']
    }
};
