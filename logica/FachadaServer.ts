import { IFachadaServer } from './IFachadaServer'
import axiosInstance from '../utils/axiosConfig'
import { Toast } from 'react-toastify/dist/components'

export class FachadaServer implements IFachadaServer {
  API_URL = process.env.API_URL
  token: string = ''

  constructor(token: string) {
    this.token = token
  }

  async postSensor(sensor: Sensor): Promise<void> {
    try {
      //agregar headers
      const res = await axiosInstance.post(`${this.API_URL}/sensores`, sensor, {
        headers: {
          'Content-Type': 'application/json',
          auth: this.token,
        },
      })
    } catch (error) {}
  }

  async postAlarma(alarma: Alarma): Promise<void> {
    try {
      const res = await axiosInstance.post(`${this.API_URL}/alarmas`, alarma, {
        headers: {
          'Content-Type': 'application/json',
          auth: this.token,
        },
      })
      console.log(res)
    } catch (error) {}
  }

  async getSensores(): Promise<Sensor[]> {
    try {
      const res = await axiosInstance.get(`${this.API_URL}/sensores`, {
        headers: {
          'Content-Type': 'application/json',
          auth: this.token,
        },
      })

      return res.data
    } catch (error) {
      return []
    }
  }
}
