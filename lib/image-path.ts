const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
export const img = (src: string) => `${basePath}${src}`
