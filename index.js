// Code your solution here
function findMatching(drivers, name) {
    const lowercaseName = name.toLowerCase();
    return drivers.filter((driver) => {
      const lowercaseDriver = driver.toLowerCase();
      for (let i = 0; i < lowercaseName.length; i++) {
        if (lowercaseDriver[i] !== lowercaseName[i]) {
          return false; // Not a match
        }
      }
      return true;
    });
  }

function fuzzyMatch(drivers, letters) {
    const lowercaseLetters = letters.toLowerCase();
    return drivers.filter((driver) => {
      const lowercaseDriver = driver.toLowerCase();
      for (let i = 0; i < lowercaseLetters.length; i++) {
        if (lowercaseDriver[i] !== lowercaseLetters[i]) {
          return false; 
        }
      }
      return true;
    });
  }

function matchName(drivers, searchString) {
  const lowercaseSearchString = searchString.toLowerCase();
  return drivers.filter(
    (driver) => driver.name.toLowerCase() === lowercaseSearchString
  );
}
