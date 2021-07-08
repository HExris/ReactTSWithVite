export type APIRequest = () => Promise<void>

export interface UsableAPI<T> {
  response: T
  request: APIRequest
}

const useAPI = (url: RequestInfo, options?: RequestInit) => {
  let response
  const request = async () => {
    const res = await fetch(url, options)
    const data = await res.json()
    response = data
  }
  return {
    response,
    request
  }
}

export default useAPI
export { useAPI }
