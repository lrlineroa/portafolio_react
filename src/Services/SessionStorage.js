import React, { useState, useEffect } from "react";

// hook for sessionStorage
const useStorage = (key, defaultValue) => {
  const [storageValue, updateStorageValue] = useState(defaultValue);

  function getStorageValue() {
    let value = defaultValue;
    try {
      value = JSON.parse(sessionStorage.getItem(key)) || defaultValue;
    } catch (e) {
    } finally {
      updateStorageValue(value);
    }
  }

  function updateStorage(newValue) {
    try {
      if (newValue === null) {
        sessionStorage.removeItem(key);
      } else {
        const value = JSON.stringify(newValue);
        sessionStorage.setItem(key, value);
      }
    } catch (e) {
    } finally {
      updateStorageValue(newValue);
    }
  }

  useEffect(() => {
    getStorageValue();
  }, []);

  return [storageValue, updateStorage];
};

export async function saveValue(key, value) {
  try {
    if (value == null) {
      removeValue(key);
      return { success: true };
    } else {
      sessionStorage.setItem(key, JSON.stringify(value));
      return { success: true };
    }
  } catch (e) {
    console.log("LOG_Async Storage access Failed", e);
    return { error: e };
  }
}

export function getValue(key) {
  try {
    const value = sessionStorage.getItem(key);
    return value;
  } catch (e) {
    console.log("LOG_Async Storage access Failed", e);
    return false;
  }
}

export async function getMultiValues(keys) {
  let values;
  try {
    values = sessionStorage.getMultiValues(keys);
  } catch (e) {
    console.log("LOG_Async Storage access Failed", e);
    return false;
  }

  let value;
  values.forEach((v, i) => {
    value[v[0]] = v[1];
  });

  return value;
}

export function removeValue(key) {
  try {
    sessionStorage.removeItem(key);
    return { success: true };
  } catch (e) {
    console.log("LOG_Async Storage access Failed", e);
    return { error: e };
  }
}

export async function mergeValues(key, value) {
  try {
    if (!(sessionStorage.getItem(key))) {
      sessionStorage.setItem(key, JSON.stringify(value));
    } else {
      sessionStorage.mergeItem(key, JSON.stringify(value));
    }
  } catch (e) {
    console.log("LOG_Async Storage access Failed", e);
  }
}

export async function clearAll() {
  try {
    sessionStorage.clear();
  } catch (e) {
    console.log("LOG_Async Storage access Failed", e);
  }
}

export default useStorage;
