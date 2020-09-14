import React, { createContext } from 'react';

const ProgressContext = createContext()

export const ProgressProvider = ProgressContext.Provider;
export const ProgressConsumer = ProgressContext.Consumer;

export default ProgressContext;