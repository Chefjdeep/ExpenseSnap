const LOCAL_STORAGE_KEY = 'ExpenseSnap-state';

// Save state to localStorage
export const saveToLocalStorage = (state) => {
  try {
    const stateString = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_KEY, stateString);
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

// Load state from localStorage
export const loadFromLocalStorage = () => {
  try {
    const stateString = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stateString ? JSON.parse(stateString) : null;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return null;
  }
};

// Clear the localStorage
export const clearLocalStorage = () => {
  try {
    localStorage.clear(LOCAL_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};
