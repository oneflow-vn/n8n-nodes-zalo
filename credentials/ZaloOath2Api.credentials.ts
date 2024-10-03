import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class ZaloOath2Api implements ICredentialType {
	name = 'zaloOath2Api';

	extends = ['oAuth2Api'];

	displayName = 'Zalo OAuth2 API';

	documentationUrl = 'https://developers.zalo.me/docs/official-account/bat-dau/kham-pha';

	// https://oauth.zaloapp.com/v4/permission?app_id=<APP_ID>&redirect_uri=<CALLBACK_URL>&code_challenge=<CODE_CHALLENGE>&state=<STATE>

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
			displayName: 'Code Verifier',
			name: 'codeVerifier',
			type: 'string',
			default: 'codeVerifier',
		},
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'authorizationCode',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://passport.larksuite.com/suite/passport/oauth/authorize',
			required: true,
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://oauth.zaloapp.com/v4/access_token',
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
			default: 'code_challenge=code_verifier',
		},
	];
}
