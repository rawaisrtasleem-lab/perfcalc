// Legacy GPU list - imported from gpu2 for backward compatibility
import gpuData from "./gpu2"

export const gpuList = gpuData.map(gpu => ({
  name: gpu.value,
  label: gpu.label
}))

export default gpuList