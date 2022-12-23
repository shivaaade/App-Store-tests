// Write your code here

const TabItem = props => {
  const {appTabDetails, finalApps} = props
  const {tabId, displayText} = appTabDetails

  const changeApps = () => {
    finalApps(tabId)
  }

  return (
    <li>
      <button type="button" onClick={changeApps}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
