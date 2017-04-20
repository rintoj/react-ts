
export class WebpackService {

  readonly targetDir = '~/banks-adk'

  startServer() {
    alert('here')
  }

  stopServer() {
    alert('stop')
  }

}

export const webpackService = new WebpackService()