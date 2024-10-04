import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ZaloOath2Api implements ICredentialType {
	name = 'zaloOath2Api';

	extends = ['oAuth2Api'];

	displayName = 'Zalo OAuth2 API';

	documentationUrl = 'https://developers.zalo.me/docs/official-account/bat-dau/kham-pha';

	// Authorization URL
	// https://oauth.zaloapp.com/v4/permission?app_id=<APP_ID>&redirect_uri=<CALLBACK_URL>&code_challenge=<CODE_CHALLENGE>&state=<STATE>
	// code_challenge = Base64.encode(SHA-256.hash(ASCII(code_verifier)))

	// Access Token URL
	// curl \
	// -X POST \
	// -H "Content-Type: application/x-www-form-urlencoded" \
	// -H "secret_key: <your_secret_key>" \
	// --data-urlencode 'code=<your_oauth_code>' \
	// --data-urlencode 'app_id=<your_app_id>' \
	// --data-urlencode 'grant_type=authorization_code' \
	// --data-urlencode 'code_verifier=your_code_verifier' \
	// 'https://oauth.zaloapp.com/v4/access_token'

	properties: INodeProperties[] = [
		{
			displayName: 'APP ID',
			name: 'appId',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'pkce',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://oauth.zaloapp.com/v4/permission',
			required: true,
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',

			/**
			 * The following url is the proxy url to add the app_id query parameter into the request's body.
			 * since Zalo OAuth2 API requires the app_id to be in the request's body, we need to use a proxy to add the app_id query parameter into the request's body.
			 *
			 * TODO: Wait for the n8n team to add the ability to add extra body parameters to the request.
			 */
			default:
				'={{"https://edge.oneflow.vn/zalo-auth?url=https://oauth.zaloapp.com/v4/access_token&app_id="+$self["appId"]}}',
			required: true,
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: '={{"app_id="+$self["appId"]}}',
		},
	];

	// This credential is currently not used by any node directly
	// but the HTTP Request node can use it to make requests.
	// The credential is also testable due to the `test` property below
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				access_token: '={{$credentials.accessToken}}',
			},
		},
	};

	// curl \
	// -X GET \
	// -H 'access_token: <your_access_token>' \
	// "https://graph.zalo.me/v2.0/me?fields=id,name,picture"
	test?: ICredentialTestRequest | undefined = {
		request: {
			url: 'https://graph.zalo.me/v2.0/me?fields=id,name,picture',
		},
	};
}
