import React from "react";
import Data from "../data/data.json";

function Find() {
  // 1. find min age and show the same
  const minAge = Data.reduce((min, person) =>
    person.age < min.age ? person : min
  );

  // 2. find maxn age and show the same
  const maxAge = Data.reduce((max, person) =>
    person.age > max.age ? person : max
  );

  // 3. Sort by min age
  const sortByMinAge = [...Data].sort((a, b) => a.age - b.age);

  // 3. Sort by maxn age
  const sortByMaxAge = [...Data].sort((a, b) => b.age - a.age);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">People Information</h1>
      <div className="grid grid-cols-3">
        <div className="w-full">
          <div className="mb-4">
            <h2 className="font-bold">Person Min Age</h2>
            <p>
              {minAge.name} (Age: {minAge.age})
            </p>
          </div>
          <div className="mb-4">
            <h2 className="font-bold">Person Max Age</h2>
            <p>
              {maxAge.name} (Age: {maxAge.age})
            </p>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h2 className="font-bold">Sort by Min Age</h2>
            <ul>
              {sortByMinAge.map((person) => (
                <li key={person.name}>
                  {person.name} (Age: {person.age})
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h2 className="font-bold">Sort by Max Age</h2>
            <ul>
              {sortByMaxAge.map((person) => (
                <li key={person.name}>
                  {person.name} (Age: {person.age})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Find;
