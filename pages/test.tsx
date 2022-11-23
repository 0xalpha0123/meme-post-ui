import React from "react";
import { useState } from "react";
import { Select } from "../components";

const options = [
  {
    label: "Mammal",
    options: [
      { value: "Dolphin", label: "🐬 Dolphin", disabled: true },
      { value: "Giraffe", label: "🦒 Giraffe" },
    ],
  },
  {
    label: "Carnivore",
    options: [
      { value: "Tiger", label: "🐅 Tiger" },
      { value: "Lion", label: "🦁 Lion" },
    ],
  },
  // 👉 You can put the grouped and ungrouped options together
  { value: "Zombie", label: "🧟 Zombie" },
];

import { Layout } from "../components";

const Test = () => {
  const metaInfo = {
    title: "Test",
  };

  const [animal, setAnimal] = useState(null);

  const handleChange = (value: any) => {
    setAnimal(value);
  };

  return (
    <Layout metaInfo={metaInfo}>
      <div className="p-3 flex flex-col gap-3">
        <div className="flex gap-6 p-6 rounded transition duration-100 border border-primary_white-200 dark:border-primary_dark-200 bg-white dark:bg-bg_dark">
          <Select
            value={animal}
            onChange={handleChange}
            options={options}
            // isDisabled
            isClearable
            isMultiple
            loading
            isSearchable
          />
        </div>
      </div>
    </Layout>
  );
};

// eslint-disable-next-line new-cap
// Test.Guard = NetworkGuard([ChainId.POLYGON, ChainId.MAINNET]);

export default Test;
