import { Routes } from '@angular/router';
import { DataBinding } from './pages/data-binding/data-binding';
import { ControlFlow } from './pages/control-flow/control-flow';
import { DynamicCssClass } from './pages/dynamic-css-class/dynamic-css-class';
import { User } from './pages/user/user';
import { Form } from './pages/form/form';
import { ReactiveForm } from './pages/reactive-form/reactive-form';

export const routes: Routes = [
  {
    path: 'user',
    component: User,
  },
  {
    path: 'data-binding',
    component: DataBinding,
  },
  {
    path: 'control-flow',
    component: ControlFlow,
  },
  {
    path: 'dynamic-css-class',
    component: DynamicCssClass,
  },
  {
    path: 'form',
    component: Form,
  },
  {
    path: 'reactive-form',
    component: ReactiveForm,
  },
];
