import { App } from 'vue'

const components: any[] = []

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
