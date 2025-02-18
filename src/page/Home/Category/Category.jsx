import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  tabs,
} from '@material-tailwind/react';
import { useState } from 'react';
import usePets from '../../../hooks/usePets/usePets';
import CategoryCard from './CategoryCard/CategoryCard';
const Category = () => {
  const [activeTab, setActiveTab] = useState('');
  activeTab;
  const [pets] = usePets();
  pets;
  const cat = pets.filter(item => item.category === 'Cat');
  const rabbit = pets.filter(item => item.category === 'Rabbit');
  const dog = pets.filter(item => item.category === 'Dog');
  const fish = pets.filter(item => item.category === 'Fish');
  const birds = pets.filter(item => item.category === 'Birds');

  const data = [
    {
      label: 'Cat',
      value: 'cat',
      desc: <CategoryCard item={cat}></CategoryCard>,
    },
    {
      label: 'Rabbit',
      value: 'Rabbit',
      desc: <CategoryCard item={rabbit}></CategoryCard>,
    },
    {
      label: 'Dog',
      value: 'dog',
      desc: <CategoryCard item={dog}></CategoryCard>,
    },
    {
      label: 'Fish',
      value: 'fish',
      desc: <CategoryCard item={fish}></CategoryCard>,
    },
    {
      label: 'Birds',
      value: 'svelte',
      desc: <CategoryCard item={birds}></CategoryCard>,
    },
  ];

  return (
    <div className="py-3">
      <div>
        <h2 className="text-center text-6xl font-bold"> Select Pet Category</h2>
      </div>
      <Tabs className="text-red-500 mt-24" value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              'bg-transparent border-b-2 border-gray-900 shadow-none rounded-none',
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                activeTab === value
                  ? 'text-blue-gray-800 font-bold text-xl'
                  : 'text-xl '
              }
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        {activeTab ? (
          ''
        ) : (
          <>
            <CategoryCard item={pets}></CategoryCard>
          </>
        )}
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Category;
