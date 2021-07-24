import { IGroup, IGroups, IStore, ISubscription } from "./types";

function devToolsFactory() {
  const __subscribers = new Set<ISubscription>();
  const __groups: IGroups = [];
  let isInitialized = false;
  const __store: IStore = {};

  const publicApi = { addGroup, subscribe, load, checkStore: getStore };

  const internalApi = {
    notify,
    getGroups,
  };

  return {
    publicApi,
    internalApi,
  };

  //#region Public API
  function load(callback: any) {
    if (isInitialized === false) {
      import("./install")
        .then((devTools) => {
          devTools.install();
          isInitialized = true;
        })
        .finally(callback);
    }
  }

  function addGroup(group: IGroup): void {
    /**
     * Need to save initial value of all items
     */
    for (const item of group.items) {
      if ("initial" in item) {
        __store[item.id] = item.initial;
      }
    }

    __groups.push(group);
  }

  function subscribe(callback: ISubscription) {
    __subscribers.add(callback);

    return () => {
      __subscribers.delete(callback);
    };
  }

  function getStore() {
    return { ...__store };
  }

  //#endregion

  //#region Private API
  function notify(eventId: string, nextValue: any) {
    for (const subscriber of __subscribers) {
      subscriber(eventId, nextValue);
    }
  }

  function getGroups(): IGroups {
    return __groups;
  }
  //#region
}

export const devTools = devToolsFactory();
