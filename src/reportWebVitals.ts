import { ReportHandler } from 'web-vitals'
import { isFunction } from 'lodash-es'

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && isFunction(onPerfEntry)) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
