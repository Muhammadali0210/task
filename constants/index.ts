const treeData = [
    {
      label: 'Models',
      children: [
        {
          label: 'Data warehouse',
          children: [
            { label: 'Report samples', children: [] },
            { label: 'Sales performance', children: [] },
            {
              label: 'Data analysis',
              children: [
                { label: 'Quarterly report', children: [] },
                { label: 'Annual report', children: [] },
                {
                  label: 'Comparative analysis',
                  children: [
                    { label: 'Region-wise comparison', children: [] },
                    { label: 'Product-wise comparison', children: [] },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Statistics',
          children: [
            { label: 'Customer feedback', children: [] },
            { label: 'Sales statistics', children: [] },
            {
              label: 'Market trends',
              children: [
                { label: 'Emerging markets', children: [] },
                { label: 'Consumer behavior', children: [] },
              ],
            },
          ],
        },
        {
          label: 'Inventory',
          children: [
            { label: 'Stock levels', children: [] },
            { label: 'Suppliers', children: [] },
            {
              label: 'Warehouse management',
              children: [
                { label: 'Receiving goods', children: [] },
                { label: 'Shipping goods', children: [] },
                {
                  label: 'Inventory audits',
                  children: [
                    { label: 'Monthly audits', children: [] },
                    { label: 'Yearly audits', children: [] },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Finance',
      children: [
        {
          label: 'Budgeting',
          children: [
            { label: 'Annual budget', children: [] },
            { label: 'Departmental budgets', children: [] },
          ],
        },
        {
          label: 'Investments',
          children: [
            { label: 'Portfolio management', children: [] },
            { label: 'Market analysis', children: [] },
          ],
        },
        {
          label: 'Financial reports',
          children: [
            { label: 'Monthly financials', children: [] },
            { label: 'Quarterly financials', children: [] },
            {
              label: 'Yearly financials',
              children: [
                { label: 'Profit and loss statement', children: [] },
                { label: 'Balance sheet', children: [] },
                { label: 'Cash flow statement', children: [] },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Sales',
      children: [
        {
          label: 'Sales performance',
          children: [
            { label: 'Team performance', children: [] },
            { label: 'Individual performance', children: [] },
            {
              label: 'Sales strategies',
              children: [
                { label: 'Upselling', children: [] },
                { label: 'Cross-selling', children: [] },
              ],
            },
          ],
        },
        {
          label: 'Customer relationship management',
          children: [
            { label: 'Lead management', children: [] },
            { label: 'Customer support', children: [] },
          ],
        },
      ],
    },
    {
      label: 'Marketing',
      children: [
        {
          label: 'Campaigns',
          children: [
            { label: 'Social media campaigns', children: [] },
            { label: 'Email campaigns', children: [] },
            {
              label: 'SEO and content marketing',
              children: [
                { label: 'Keyword research', children: [] },
                { label: 'Content creation', children: [] },
              ],
            },
          ],
        },
        {
          label: 'Market research',
          children: [
            { label: 'Surveys', children: [] },
            { label: 'Focus groups', children: [] },
          ],
        },
      ],
    },
];
 
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['NICE', 'DEVELOPER'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['LOSER'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['COOL', 'TEACHER'],
  },
  {
    key: '4',
    name: 'Lucy White',
    age: 28,
    address: 'New York No. 2 Lake Park',
    tags: ['NICE', 'DESIGNER'],
  },
  {
    key: '5',
    name: 'Tom Blue',
    age: 36,
    address: 'Chicago No. 4 Lake Park',
    tags: ['SMART', 'MANAGER'],
  },
  {
    key: '6',
    name: 'Anna Green',
    age: 24,
    address: 'San Francisco No. 6 Lake Park',
    tags: ['COOL', 'STUDENT'],
  },
  {
    key: '7',
    name: 'Chris Black',
    age: 29,
    address: 'Houston No. 7 Lake Park',
    tags: ['AWESOME', 'DEVELOPER'],
  },
  {
    key: '8',
    name: 'Emily Red',
    age: 34,
    address: 'Miami No. 8 Lake Park',
    tags: ['LOSER', 'ARTIST'],
  },
  {
    key: '9',
    name: 'Michael White',
    age: 40,
    address: 'Los Angeles No. 9 Lake Park',
    tags: ['GENIUS', 'LEADER'],
  },
  {
    key: '10',
    name: 'Sophia Blue',
    age: 31,
    address: 'Dallas No. 10 Lake Park',
    tags: ['SMART', 'INSTRUCTOR'],
  },
  {
    key: '11',
    name: 'David Black',
    age: 45,
    address: 'New York No. 11 Lake Park',
    tags: ['HARDWORKING', 'DIRECTOR'],
  },
  {
    key: '12',
    name: 'Emma Brown',
    age: 22,
    address: 'Chicago No. 12 Lake Park',
    tags: ['LOSER', 'STUDENT'],
  },
  {
    key: '13',
    name: 'Oliver Blue',
    age: 50,
    address: 'Houston No. 13 Lake Park',
    tags: ['COOL', 'CEO'],
  },
  {
    key: '14',
    name: 'Mia White',
    age: 27,
    address: 'Miami No. 14 Lake Park',
    tags: ['NICE', 'TEACHER'],
  },
  {
    key: '15',
    name: 'Noah Green',
    age: 38,
    address: 'San Francisco No. 15 Lake Park',
    tags: ['SMART', 'ENGINEER'],
  },
  {
    key: '16',
    name: 'Isabella Brown',
    age: 35,
    address: 'Los Angeles No. 16 Lake Park',
    tags: ['HARDWORKING', 'SCIENTIST'],
  },
  {
    key: '17',
    name: 'James Blue',
    age: 29,
    address: 'Dallas No. 17 Lake Park',
    tags: ['GENIUS', 'DESIGNER'],
  },
  {
    key: '18',
    name: 'Ava Green',
    age: 33,
    address: 'New York No. 18 Lake Park',
    tags: ['COOL', 'LAWYER'],
  },
  {
    key: '19',
    name: 'Ethan Black',
    age: 46,
    address: 'Chicago No. 19 Lake Park',
    tags: ['AWESOME', 'DOCTOR'],
  },
  {
    key: '20',
    name: 'Charlotte Blue',
    age: 41,
    address: 'San Francisco No. 20 Lake Park',
    tags: ['NICE', 'WRITER'],
  },
  {
    key: '21',
    name: 'Jack White',
    age: 30,
    address: 'Los Angeles No. 21 Lake Park',
    tags: ['SMART', 'ACTOR'],
  },
  {
    key: '22',
    name: 'Lily Brown',
    age: 28,
    address: 'Miami No. 22 Lake Park',
    tags: ['COOL', 'TEACHER'],
  },
  {
    key: '23',
    name: 'Mason Green',
    age: 48,
    address: 'Houston No. 23 Lake Park',
    tags: ['GENIUS', 'SCIENTIST'],
  },
  {
    key: '24',
    name: 'Harper Red',
    age: 36,
    address: 'Dallas No. 24 Lake Park',
    tags: ['AWESOME', 'MANAGER'],
  },
  {
    key: '25',
    name: 'Jacob Blue',
    age: 32,
    address: 'New York No. 25 Lake Park',
    tags: ['HARDWORKING', 'DEVELOPER'],
  },
];


const column = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  { 
    title: 'Tags',
    dataIndex: 'tags', 
    key: 'tags' 
  },
  { title: 'Action', 
    dataIndex: 'actions', 
    key: 'actions' 
  },
];


export { treeData, data, column };