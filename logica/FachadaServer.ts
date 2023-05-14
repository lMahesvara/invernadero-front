import { IFachadaServer } from './IFachadaServer'

export class FachadaServer implements IFachadaServer {
  API_URL = process.env.API_URL || 'http://localhost:3000'

  async postSensor(sensor: Sensor): Promise<void> {
    try {
      const res = await fetch(this.API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sensor),
      })
      console.log(res)
    } catch (error) {}
  }

  async postAlarma(alarma: Alarma): Promise<void> {
    try {
      const res = await fetch(this.API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(alarma),
      })
      console.log(res)
    } catch (error) {}
  }

  async getSensores(): Promise<Sensor[]> {
    try {
      const res = await fetch(this.API_URL)
      const data = await res.json()
      return data as Sensor[]
    } catch (error) {
      return []
    }
  }
}
