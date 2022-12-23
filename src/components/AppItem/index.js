// Write your code here

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl, category} = appDetails

  return (
    <li>
      <img alt={appName} value={category} src={imageUrl} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
