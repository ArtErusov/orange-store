import React from "react"
import ContentLoader from "react-content-loader"

const CardSceleton = (props) => (
  <ContentLoader 
    speed={4}
    width={237}
    height={480}
    viewBox="0 0 237 480"
    backgroundColor="#ededed"
    foregroundColor="#d6d6d6"
    {...props}
  >
    <rect x="11" y="272" rx="3" ry="3" width="88" height="21" /> 
    <rect x="20" y="309" rx="3" ry="3" width="178" height="6" /> 
    <rect x="38" y="40" rx="0" ry="0" width="161" height="180" /> 
    <rect x="0" y="232" rx="0" ry="0" width="56" height="23" /> 
    <rect x="70" y="232" rx="0" ry="0" width="56" height="23" /> 
    <rect x="140" y="233" rx="0" ry="0" width="56" height="23" /> 
    <rect x="20" y="329" rx="3" ry="3" width="178" height="6" /> 
    <rect x="20" y="350" rx="3" ry="3" width="178" height="6" /> 
    <rect x="38" y="417" rx="0" ry="0" width="161" height="42" /> 
    <rect x="88" y="427" rx="0" ry="0" width="28" height="0" />
  </ContentLoader>
)

export default CardSceleton;
