class Authenticate {
  // Store tokens in local storage
  storeTokens = (
    accessToken: string,
    refreshToken: string,
    user_id: string
  ): void => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("user_id", user_id);
  };

  // API call function with token handling
  apiCall = async (url: string, options: RequestInit): Promise<any> => {
    const accessToken = localStorage.getItem("accessToken");

    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 401) {
      // Token expired, try to refresh it
      const newAccessToken = await this.refreshAccessToken();
      if (newAccessToken) {
        return this.apiCall(url, options); // Retry with new access token
      }
    }

    return response;
  };

  // Refresh access token using the refresh token
  refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    const response = await fetch("/api/refresh-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (response.ok) {
      const { accessToken } = await response.json();
      localStorage.setItem("accessToken", accessToken);
      return accessToken;
    } else {
      // Handle refresh token expiration (log out the user)
      this.logout();
    }
  };

  // Logout function to clear tokens
  logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    // Redirect to login or show a message
  };
}

const auth = new Authenticate();

export default auth;
