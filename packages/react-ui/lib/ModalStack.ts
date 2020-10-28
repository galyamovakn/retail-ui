import React from 'react';
import EventEmitter from 'eventemitter3';
import { SidePageProps } from '../components/SidePage';
import { ModalProps } from '../components/Modal';

interface StackInfo {
  emitter: EventEmitter;
  mounted: React.Component[];
}

interface GlobalWithStackInfo {
  __ReactUIStackInfo?: StackInfo;
}

export interface ModalStackSubscription {
  remove: () => void;
}

export class ModalStack {
  public static add(
    component: React.Component,
    onChange: (stack: ReadonlyArray<React.Component>) => void,
  ): ModalStackSubscription {
    const { emitter, mounted } = ModalStack.getStackInfo();
    mounted.unshift(component);
    const changeHandler = () => onChange([...mounted]);
    emitter.addListener('change', changeHandler);
    emitter.emit('change');
    return {
      remove: () => {
        emitter.removeListener('change', changeHandler);
      },
    };
  }

  public static remove(component: React.Component) {
    const { emitter, mounted } = ModalStack.getStackInfo();
    const index = mounted.indexOf(component);
    if (index !== -1) {
      mounted.splice(index, 1);
    }
    emitter.emit('change');
  }

  public static isBlocking(component: React.Component): boolean {
    const { mounted } = ModalStack.getStackInfo();
    for (let index = 0; index < mounted.length; index++) {
      if (ModalStack.wantsToBlock(mounted[index])) {
        return component === mounted[index];
      }
    }
    return false;
  }

  private static getStackInfo(): StackInfo {
    const globalWithStack = global as GlobalWithStackInfo;
    return (
      globalWithStack.__ReactUIStackInfo ||
      (globalWithStack.__ReactUIStackInfo = {
        emitter: new EventEmitter(),
        mounted: [],
      })
    );
  }

  private static wantsToBlock(component: React.Component): boolean {
    if (isModal(component)) {
      return true;
    }

    if (isSidePage(component)) {
      const { mounted } = ModalStack.getStackInfo();
      const deepestSidePages = mounted.filter(i => isSidePage(i)).pop();
      return !!component.props.blockBackground && component === deepestSidePages;
    }

    return false;
  }
}

export const isSidePage = (component: React.Component): component is React.Component<SidePageProps> => {
  const { constructor } = component;
  return (
    constructor &&
    Object.prototype.hasOwnProperty.call(constructor, '__KONTUR_REACT_UI__') &&
    // @ts-ignore
    constructor.__KONTUR_REACT_UI__ === 'SidePage'
  );
};

export const isModal = (component: React.Component): component is React.Component<ModalProps> => {
  const { constructor } = component;
  return (
    constructor &&
    Object.prototype.hasOwnProperty.call(constructor, '__KONTUR_REACT_UI__') &&
    // @ts-ignore
    constructor.__KONTUR_REACT_UI__ === 'Modal'
  );
};
