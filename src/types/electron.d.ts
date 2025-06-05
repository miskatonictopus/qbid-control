export {}

declare global {
  interface Window {
    electronAPI: {
      loginToSBid: (credentials: { username: string; password: string }) => Promise<boolean>
    }
  }
}
