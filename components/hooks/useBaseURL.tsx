  
export default function useBaseURL(){
  const forEns = process.env.NEXT_PUBLIC_IPFS_FOR === "ens"
  const baseURL = forEns ? process.env.NEXT_PUBLIC_ASSETS_BASE_URL : ""
  const appendBaseURL = (path: string) => {
      return `${baseURL}${path}`
  }
  return {appendBaseURL, baseURL}
}