// src/lib/api.ts
export function loginToSBid(username: string, password: string) {
    return window.electronAPI.loginToSBid({ username, password })
  }
  