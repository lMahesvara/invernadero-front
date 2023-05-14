export interface IFachadaServer {
  postSensor(sensor: Sensor): Promise<void>
}
