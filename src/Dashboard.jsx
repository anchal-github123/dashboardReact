import React from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,LineChart,Line } from 'recharts';
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
function Dashboard()
{

 
    
    return(
        <>
            <section className="section-dashbord">
                <div className="container">
                    <div className="sreachbar">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Sreach" class="sreachbox"></input>
                    </div>
                    <div className="dashbord-heading">
                        <h1>Dashboard</h1>
                    </div>
                 </div>
                 <div className="container">
                 {/* card================================= */}
                <div className="Cards">
                {/* cardinner================= */}
                    <div className="Card">
                    <div className="top-card">
                        <div className="card-name">
                            <h1>Products</h1>
                        </div>
                        <div className="icon">
                        <i class="fa-solid fa-briefcase"></i>
                        </div>
                    </div>
                    <div className="bottom-card">
                        <h1 className="number">249</h1>
                    </div>
                </div>
                {/* cardinnerrr================ */}

                {/* cardinner================= */}
                <div className="Card">
                    <div className="top-card">
                        <div className="card-name">
                            <h1>Categories</h1>
                        </div>
                        <div className="icon">
                        <i class="fa-solid fa-list"></i>
                        </div>
                    </div>
                    <div className="bottom-card">
                        <h1 className="number">249</h1>
                    </div>
                </div>
                {/* cardinnerrr================ */}


                {/* cardinner================= */}
                <div className="Card">
                    <div className="top-card">
                        <div className="card-name">
                            <h1>Customers</h1>
                        </div>
                        <div className="icon">
                        <i class="fa-solid fa-person"></i>
                        </div>
                    </div>
                    <div className="bottom-card">
                        <h1 className="number">249</h1>
                    </div>
                </div>
                {/* cardinnerrr================ */}



                {/* cardinner================= */}
                <div className="Card">
                    <div className="top-card">
                        <div className="card-name">
                            <h1>Alerts</h1>
                        </div>
                        <div className="icon">
                        <i class="fa-regular fa-bell"></i>
                        </div>
                    </div>
                    <div className="bottom-card">
                        <h1 className="number">249</h1>
                    </div>
                </div>
                {/* cardinnerrr================ */}
                </div>
                {/* card==================================================== */}
                </div>
        <div className="container">
         <div className="graphs">

        <div className="bar">
  
        <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip shared={false} trigger="click" />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
      </div>
        <div className="line">
        <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>

</div>
         
        </div>
</div>
</section>
        </>
    )
}
export default Dashboard;