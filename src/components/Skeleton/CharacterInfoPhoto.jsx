import React from "react"
import ContentLoader from "react-content-loader"

const CharacterInfoPhoto = () => (
  <ContentLoader 
    speed={2}
    width={300}
    height={300}
    viewBox="0 0 300 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
        
    <rect x="498" y="142" rx="3" ry="3" width="88" height="6" /> 
    <rect x="512" y="139" rx="3" ry="3" width="52" height="6" /> 
    <rect x="447" y="134" rx="3" ry="3" width="410" height="6" /> 
    <rect x="467" y="147" rx="3" ry="3" width="380" height="6" /> 
    <rect x="446" y="138" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="582" cy="373" r="20" /> 
    <circle cx="150" cy="150" r="150" />
  </ContentLoader>
)

export default CharacterInfoPhoto;