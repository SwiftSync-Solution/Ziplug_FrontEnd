// Define the expected structure of your refresh token response, for example:
interface RefreshTokenResponse {
	accessToken: string;
}

class Authenticate {
	// Store tokens in local storage
	storeTokens = (
		accessToken: string,
		refreshToken: string,
		user_id: string
	): void => {
		localStorage.setItem('accessToken', accessToken);
		localStorage.setItem('refreshToken', refreshToken);
		localStorage.setItem('user_id', user_id);
	};

	// API call function with token handling and retry limit
	apiCall = async <T>(
		url: string,
		options: RequestInit,
		retryCount = 1
	): Promise<T> => {
		const accessToken = localStorage.getItem('accessToken');

		const response = await fetch(url, {
			...options,
			headers: {
				...options.headers,
				Authorization: `Bearer ${accessToken}`,
			},
		});

		if (response.status === 401 && retryCount > 0) {
			// Token expired, try to refresh it
			const newAccessToken = await this.refreshAccessToken();
			if (newAccessToken) {
				return this.apiCall<T>(url, options, retryCount - 1); // Retry with new access token
			}
		}

		return response.json() as Promise<T>; // Parse response as JSON and cast to the expected type
	};

	// Refresh access token using the refresh token with error handling
	refreshAccessToken = async (): Promise<string | undefined> => {
		const refreshToken = localStorage.getItem('refreshToken');

		try {
			const response = await fetch('/api/refresh-token', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ refreshToken }),
			});

			if (response.ok) {
				const { accessToken } = (await response.json()) as RefreshTokenResponse;
				localStorage.setItem('accessToken', accessToken);
				return accessToken;
			} else {
				// If refresh token is invalid, log out the user
				this.logout();
			}
		} catch (error) {
			console.error('Failed to refresh access token:', error);
			this.logout();
		}
	};

	// Logout function to clear tokens and redirect
	logout = (): void => {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
		localStorage.removeItem('user_id'); // Also clear user_id if needed
		window.location.href = '/login'; // Redirect to login page
	};
}

// Instantiate the class and export
const auth = new Authenticate();
export default auth;
