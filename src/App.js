
import './App.css';
import { ResponsiveContainer,LineChart,Line ,XAxis,YAxis, CartesianGrid, Legend, Tooltip, PieChart, Pie, BarChart, Bar, RadialBarChart, RadialBar} from 'recharts';


const hdata=[
  {
    name:"Blue ocean",
    rent:"5000",
    likes:"1600"
  },
  {
    name:"Red Mansion",
    rent:"4000",
    likes:"3000"
  },
  {
    name:"Ocean View",
    rent:"7000",
    likes:"4000"
  },
  {
    name:"Hari Bol",
    rent:"2000",
    likes:"5110"
  },
  {
    name:"hotel nand ji",
    rent:"5600",
    likes:"1900"
  }
]
const data01 = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 278
  },
  {
    "name": "Group F",
    "value": 189
  }
];
const data02 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
  }
];

function App() {
  return (
    <div className="App">
      Line Chart
      <ResponsiveContainer width="70%"  aspect={3}> 
        <LineChart data={hdata} height={200} width={400} margin={{top:10,
        right:200,left:20,bottom:10}}>
          <CartesianGrid/>
          <XAxis dataKey="name" interval={'preserveStartEnd'}/>
          <YAxis />
          <Tooltip contentStyle={{"background":"lightgreen"}}/>
          <Legend/>
          <Line type="monotone" dataKey="rent" stroke='orange' activeDot={{r:8}}/>
          <Line  dataKey="likes"  activeDot={{r:8}}/>
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="70%"  aspect={3}>
      <BarChart width={730} height={250} data={hdata}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="likes" fill="#8884d8" />
        <Bar dataKey="rent" fill="#82ca9d" />
      </BarChart>
      </ResponsiveContainer>

      
      <PieChart width={730} height={250}>
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>


<RadialBarChart
  width={730} 
  height={250} 
  innerRadius="10%" 
  outerRadius="80%" 
  data={hdata} 
  startAngle={180} 
  endAngle={0}
>
  <RadialBar stroke='red' minAngle={15} label={{ fill: '#fff', position: 'insideStart' }} background clockWise={true} dataKey='rent' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>

    
    </div>
  );
}

export default App;
