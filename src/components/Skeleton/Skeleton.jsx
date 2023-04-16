import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader 
        speed={2}
        width={240}
        height={244}
        viewBox="0 0 240 244"
        backgroundColor="#bababa"
        foregroundColor="#ecebeb">
        
        <circle cx="585" cy="235" r="20" /> 
        <rect x="448" y="262" rx="8" ry="8" width="240" height="244" /> 
        <rect x="0" y="0" rx="8" ry="8" width="240" height="168" /> 
        <rect x="16" y="180" rx="4" ry="4" width="148" height="20" /> 
        <rect x="16" y="211" rx="4" ry="4" width="75" height="14" />
    </ContentLoader>
)

export default Skeleton