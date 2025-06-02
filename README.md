## Comparación: Signals vs Observables 📊

| Aspecto | Observables (BehaviorSubject) | Signals# ⚡ Angular Signals Count App

Aplicación simple en Angular que demuestra cómo compartir y sincronizar estado (`count`) entre múltiples componentes y páginas usando **Angular Signals**. Ideal para entender cómo implementar comunicación reactiva entre componentes con la nueva API de Signals en Angular 19+.



## Funcionalidades Implementadas ✨

- **Visualización del valor `count`** en el componente principal y en componentes hijos (`<app-child-1>` y `<app-child-2>`).
- **Actualización reactiva del estado** desde cualquier componente: todos reflejan el mismo valor en tiempo real.
- **Persistencia del estado entre rutas**: el valor de `count` se mantiene al navegar entre `/home` y `/page2`.
- **Componentes standalone**: todo el proyecto está construido sin `NgModule`, usando la nueva arquitectura moderna de Angular.
- **Detección de cambios optimizada**: usando Signals para mejor rendimiento comparado con observables.



## Stack Tecnológico y Conceptos Aplicados 🚀

**Angular 19:**
- **Angular Signals**: patrón de estado compartido reactivo y optimizado.
- **Signal readonly**: exposición segura del estado sin permitir modificación externa.
- **Signal.update()**: actualización inmutable del estado.
- Componentes standalone.
- Servicios inyectables (`providedIn: 'root'`) para mantener estado global.
- Routing entre componentes con persistencia de estado.
- Comunicación desacoplada entre componentes hermanos a través de servicios.

**Ventajas de Signals sobre Observables:**
- Sintaxis más simple (sin `| async` pipe).
- Mejor rendimiento y detección de cambios.
- API más directa para lectura/escritura de estado.
- Menos boilerplate code.

**Angular Material:**
- Botones (`MatButtonModule`) para acciones Add/Subtract.

**TailwindCSS:**
- Estilos utilitarios para UI moderna y responsiva.



## Estructura del Proyecto 📁

```
src/
├── app/
│   ├── core/
│   │   └── services/
│   │       └── count.service.ts     # Servicio con Signals
│   ├── components/
│   │   ├── count/
│   │   │   ├── count.component.ts   # Componente principal
│   │   │   └── count.component.html
│   │   ├── child-1.component.ts     # Componente hijo 1
│   │   ├── child-2.component.ts     # Componente hijo 2
│   │   ├── home/
│   │   │   └── home.component.ts    # Página principal
│   │   └── page-2/
│   │       └── page-2.component.ts  # Segunda página
│   └── app.routes.ts                # Configuración de rutas
```

---

## Servicio Principal (Signals) 🎯

```typescript
@Injectable({providedIn: 'root'})
export class CountService {
  private _count = signal(0);
  count = this._count.asReadonly();

  add() {
    this._count.update((c) => c + 1);
  }

  sub() {
    this._count.update((c) => c - 1);
  }
}
```

**Características clave:**
- **Signal privado** (`_count`): solo el servicio puede modificar el estado.
- **Signal readonly público** (`count`): los componentes pueden leer pero no modificar.
- **Actualización inmutable**: usando `.update()` para cambios de estado seguros.

---

## Uso en Componentes 🔧

```typescript
// En cualquier componente
export default class CountComponent {
  constructor(public countService: CountService) {}
}
```

```html
<!-- En el template -->
<h1>Count: {{countService.count()}}</h1>
<button (click)="countService.add()">Add</button>
```

**Ventajas:**
- ✅ No necesitas `| async` pipe
- ✅ Sintaxis más limpia
- ✅ Mejor rendimiento
- ✅ Detección automática de cambios

---

## Instalación y Ejecución 🚀

```bash
# Clonar el repositorio
git clone [tu-repo]
cd angular-signals-count-app

# Instalar dependencias
npm install

# Ejecutar en desarrollo
ng serve

# Construir para producción
ng build
```

---

## Comparación: Signals vs Observables 📊

| Aspecto | Observables (BehaviorSubject) | Signals |
|---------|-------------------------------|---------|
| **Sintaxis Template** | `{{count$ \| async}}` | `{{count()}}` |
| **Imports** | AsyncPipe requerido | No imports adicionales |
| **Rendimiento** | Suscripciones RxJS | Optimizado nativamente |
| **Detección de Cambios** | Manual con OnPush | Automática |
| **API** | `.next()`, `.getValue()` | `.set()`, `.update()` |
| **Código** | Más verbose | Más conciso |

---

## Enlace de la aplicación desplegada 🌐

Puedes probar la aplicación en el siguiente enlace:  
[**Ver aplicación en vivo**](https://angular-signals-count-app.netlify.app)

---

## Aprendizajes Clave 💡

1. **Signals simplifican la gestión de estado** comparado con Observables para casos simples.
2. **Mejor rendimiento** al eliminar la necesidad de suscripciones manuales.
3. **API más intuitiva** para desarrolladores nuevos en Angular.
4. **Compatibilidad total** con la arquitectura de componentes standalone.
5. **Migración gradual** posible desde Observables a Signals.

---

## Tecnologías Utilizadas 🛠️

- **Angular 19** - Framework principal
- **TypeScript** - Lenguaje de programación
- **Angular Signals** - Gestión de estado reactivo
- **Angular Material** - Componentes UI
- **TailwindCSS** - Estilos utilitarios
- **Angular Standalone Components** - Arquitectura moderna

---

*Proyecto desarrollado para demostrar las capacidades de Angular Signals en aplicaciones reactivas modernas.*
