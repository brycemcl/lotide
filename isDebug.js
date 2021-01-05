export const isDebug = (funct)=>{
  if (process.env.NODE_ENV === "development") {
    return funct
  }
  return ()=>{}
}
