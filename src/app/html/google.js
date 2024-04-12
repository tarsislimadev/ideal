// 

export const client_secret = ''

export const client_id = ''

export const project_id = ''

export const response_type = 'token'

export const scope = 'https://www.googleapis.com/auth/userinfo.profile' // https://developers.google.com/identity/protocols/oauth2/scopes

export const auth_uri = 'https://accounts.google.com/o/oauth2/auth'

export const token_uri = 'https://oauth2.googleapis.com/token'

export const auth_provider_x509_cert_url = 'https://www.googleapis.com/oauth2/v1/certs'

export const redirect_uris = ['http://localhost:8000/pages/login/']

export const redirect_uri = redirect_uris[0]

export const javascript_origins = ['http://localhost:8000']

export const GOOGLE = { response_type, scope, redirect_uri, client_id, project_id, auth_uri, token_uri, auth_provider_x509_cert_url, javascript_origins }
