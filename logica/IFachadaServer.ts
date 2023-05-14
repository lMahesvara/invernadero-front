export interface IFachadaServer {
  postSensor(sensor: Sensor): Promise<void>
  postAlarma(alarma: Alarma): Promise<void>
  getSensores(): Promise<Sensor[]>
}
