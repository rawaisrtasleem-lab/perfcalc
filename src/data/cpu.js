// Legacy CPU list - imported from cpu2 for backward compatibility
import cpuData from "./cpu2"

export const cpuList = cpuData.map(cpu => ({
  name: cpu.value,
  label: cpu.label
}))

export default cpuList